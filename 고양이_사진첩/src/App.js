import Nodes from './containers/Nodes.js';
import Node from './components/Node.js';
import Loading from './components/Loading.js';
import ModalContainer from './containers/ModalContainer.js';
import { getFilesInDirectory, getRootContents } from './api/index.js';
import { DIRECTORY_TYPE, FILE_TYPE, PREV_TYPE } from './constants.js';

export default class App {
  constructor() {
    const $root = document.getElementById('root');

    if ($root) {
      this.$root = $root;
      this.$modalContainer = new ModalContainer($root);
      this.$nodes = null;

      this.$loading = new Loading();
      this.$loading.render($root);

      this.$loading.on();

      getRootContents()
        .then((contents) => {
          if (contents) {
            this.contents = contents;
            this.render();
          }
        })
        .finally(() => {
          this.$loading.off();
        });
    } else {
      throw new Error('id가 root인 HTMLElement가 없습니다.');
    }
  }

  loadDirectoryFiles = (file) => {
    const { id: nodeId, name, type: fileType, filePath } = file;
    console.log('nodeId:', nodeId);
    console.log('fileType:', fileType);

    if (fileType === DIRECTORY_TYPE) {
      this.$loading.on();

      getFilesInDirectory(nodeId)
        .then((nextContents) => {
          if (nextContents) {
            this.contents = nextContents;
            this.$nodes.setNodes(nextContents);
          }
        })
        .finally(() => {
          this.$loading.off();
        });
    } else if (fileType === FILE_TYPE) {
      const path = filePath.startsWith('/') ? filePath.slice(1) : filePath;

      this.$modalContainer.setState(
        `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public/${path}`
      );
    }
  };

  render() {
    this.$nodes = new Nodes(this.contents, this.loadDirectoryFiles);

    this.$root.appendChild(this.$nodes.render());
  }
}
