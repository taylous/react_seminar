export default class Loading {
  constructor() {
    this.$container = document.createElement('div');
    this.$container.className = 'Modal';
  }

  on() {
    this.$container.classList.add('on');
    this.$container.classList.remove('off');
  }

  off() {
    this.$container.classList.add('off');
    this.$container.classList.remove('on');
  }

  render($root) {
    const $content = document.createElement('div');
    const $img = document.createElement('img');

    $content.className = 'content';
    $img.src = './assets/nyan-cat.gif';

    $content.appendChild($img);
    this.$container.appendChild($content);

    $root.appendChild(this.$container);
  }
}
