import loginStore from './loginStore';
import registerStore from './registerStore';
import smesStore from './smesStore';
import authorStore from './authorStore';
import allProjectStore from './allProjectStore';

export class rootStore {
  constructor() {
      this.authorStore = new authorStore(this);
      this.loginStore = new loginStore(this);     
      this.registerStore = new registerStore(this);
      this.smesStore = new smesStore(this);
      this.allProjectStore = new allProjectStore(this);
  }
}

export default new rootStore();