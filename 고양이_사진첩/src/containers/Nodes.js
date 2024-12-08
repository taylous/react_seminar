import Node from '../components/Node.js';
import { PREV_TYPE } from '../constants.js';

export default class Nodes {
  constructor(files = [], loadDirectoryFiles) {
    this.files = files;
    this.loadDirectoryFiles = loadDirectoryFiles;

    this.$container = document.createElement('div');
    this.$container.onclick = (event) => {
      event.stopPropagation();

      const $target = event.target;

      if ($target) {
        const $node = $target.closest('.Node');

        if ($node) {
          const { id: nodeId } = $node.dataset;

          this.loadDirectoryFiles(
            this.files.find((file) => file.id === nodeId)
          );
        }
      }
    };
  }

  setNodes = (nextFiles) => {
    this.files = nextFiles;
    this.cleanUp();
    this.render();
  };

  cleanUp() {
    while (this.$container.firstChild) {
      this.$container.removeChild(this.$container.firstChild);
    }
  }

  render() {
    const $prev = new Node(PREV_TYPE).render();

    this.$container.appendChild($prev);

    this.$container.className = 'Nodes';

    if (this.files.length > 0) {
      const nodes = this.files.map(
        ({ id, name, type, filtPath, parent }) => new Node(type, id, name)
      );

      nodes.forEach((node) => {
        this.$container.appendChild(node.render());
      });
    }
    return this.$container;
  }
}
