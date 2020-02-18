import Post from '../../models/post';

/*
  POST /api/posts
  {
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
  }
*/
export const write = async ctx => {

  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title,
    body,
    tags,
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

export const list = ctx => {};

export const read = ctx => {};

export const remove = ctx => {};

export const update = ctx => {};