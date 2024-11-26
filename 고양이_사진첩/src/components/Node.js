import { DIRECTORY_TYPE, FILE_TYPE, PREV_TYPE } from '../constants.js';

export default class Node {
  constructor(type, id, description) {
    this.type = type;
    this.id = id;
    this.description = description;
  }

  createImageElement() {
    const $img = document.createElement('img');

    if (this.type === FILE_TYPE) {
      $img.src = './assets/file.png';
    } else if (this.type === DIRECTORY_TYPE) {
      $img.src = './assets/directory.png';
    } else if (this.type === PREV_TYPE) {
      $img.src = './assets/prev.png';
    }
    return $img;
  }

  createDescription() {
    const $description = document.createElement('div');
    $description.textContent = this.description;

    return $description;
  }

  createDivElement() {
    const $div = document.createElement('div');
    $div.className = 'Node';
    $div.style.cursor = 'pointer';

    $div.dataset.id = this.id;
    $div.dataset.type = this.type;

    $div.appendChild(this.createImageElement());

    if (this.description) {
      $div.appendChild(this.createDescription());
    }

    return $div;
  }

  render() {
    const $node = this.createDivElement();

    return $node;
  }
}
