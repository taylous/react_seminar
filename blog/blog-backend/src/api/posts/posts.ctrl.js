import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  try {
    const post = await Post.findById(id);
    // 포스트가 존재하지 않을 때
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * id로 찾은 포스트가 로그인 중인 사용자가 작성한 포스트인지 확인
 * @param {*} ctx 
 * @param {*} next 
 */
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
}

/**
 * POST /api/posts
 * 블로그 포스트를 작성하는 기능
 * {
 *  title: '제목',
 *  body: '내용',
 *  tags: ['태그1', '태그2']
 * }
 *
 * @param {*} ctx
 */
export const write = async ctx => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // required()가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required(), // 문자열로 이루어진 배열
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title,
    body,
    tags,
    user: ctx.state.user
  });

  try {
    // 인스턴스를 만들었다고 바로 데이터베이스에 저장되는건 아님.
    // .save()를 해줘야 저장이 된다.
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * GET /api/posts?username=&tag=&page=
 * 데이터 조회 기능
 *
 * @param {*} ctx
 */
export const list = async ctx => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
  // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  }

  try {
    // find() 함수를 호출한 후에는 exec()을 붙여줘야 서버에 쿼리를 요청함.
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      //.lean()
      .exec();

    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts
      // 위에서 .lean()을 사용하면 .toJSON()을 안해도 됨.
      .map(post => post.toJSON())
      .map(post => ({
        ...post,
        body:
          post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * GET /api/posts/:id
 * 특정 포스트를 id로 찾아서 조회하는 기능
 *
 * @param {*} ctx
 */
export const read = async ctx => {
  ctx.body = ctx.state.post;
};

/**
 * DELETE /api/posts/:id
 * id값을 참조해서 데이터를 삭제하는 기능
 *
 * @param {*} ctx
 */
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공하기는 했지만 응답할 데이터는 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * PATCH /api/posts/:id
 * 기존의 데이터를 업데이트 하는 기능
 * {
 *  title: '수정',
 *  body: '수정 내용',
 *  tags: ['수정', '태그']
 * }
 *
 * @param {*} ctx
 */
export const update = async ctx => {
  const { id } = ctx.params;

  // write 에서 사용한 schema 와 비슷한데, required() 가 없습니다.
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  // 검증 후, 검증 실패시 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false일 때는 업데이트되기 전의 데이터를 반환합니다.
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
