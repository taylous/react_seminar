import Modal from '../components/Modal.js';

export default class ModalContainer {
  constructor($root) {
    this.$modal = new Modal();

    $root.appendChild(this.$modal.render());
  }

  setState = (fileUrl) => {
    if (fileUrl) {
      this.$modal.on(fileUrl);
    } else {
      this.$modal.off();
    }
  };
}
