// import { container, heading, button } from './vanilla.extract.style.css';
import { container, heading, button } from './emotion.style';
import { blueStyle as blueStyleA } from './blueStyleA';
import { bbbbbbblueStyle as blueStyleB } from './blueStyleB';

// 컨테이너 생성
const app = document.getElementById('app');

if (app) {
  app.className = container;

  // 제목 생성
  const title = document.createElement('h1');
  title.className = heading;
  title.textContent = 'Vanilla Extract with Vanilla JS';
  app.appendChild(title);

  // 버튼 생성
  const btn = document.createElement('button');
  btn.className = button;
  btn.textContent = 'Click Me';
  app.appendChild(btn);

  // 버튼 클릭 이벤트 추가
  btn.addEventListener('click', () => {
    alert('Button clicked!');
  });

  const elementA = document.createElement('div');
  elementA.className = blueStyleA;
  elementA.textContent = 'This is A';
  app.appendChild(elementA);

  const elementB = document.createElement('div');
  elementB.className = blueStyleB;
  elementB.textContent = 'This is B';
  app.appendChild(elementB);
}
