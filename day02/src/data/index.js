import { v4 as uuidv4 } from 'uuid';

const createTodo = (content) => ({
  id: uuidv4(),
  content,
  done: false,
});

const todos = [
  {
    id: 0,
    content: '리액트 스쳐지나 가듯 살짝만 맛보기',
    done: false,
  },
  {
    id: 1,
    content: '쌍근 만들기',
    done: false,
  },
];

export { todos, createTodo };
