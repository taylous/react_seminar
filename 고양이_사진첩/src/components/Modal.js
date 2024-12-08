export default class Modal {
  constructor() {
    this.$container = document.createElement('div');
    this.$img = document.createElement('img');

    this.$container.className = 'Modal ImageViewer off';
  }

  on(src) {
    this.$container.classList.add('on');
    this.$container.classList.remove('off');

    // this.$img.src = src;
    this.$img.src = './assets/sample_image.jpg';
  }

  off() {
    this.$container.classList.add('off');
    this.$container.classList.remove('on');

    this.$img.src = '';
  }

  render() {
    const $content = document.createElement('div');

    $content.className = 'content';
    $content.appendChild(this.$img);
    this.$container.appendChild($content);

    return this.$container;
  }
}
