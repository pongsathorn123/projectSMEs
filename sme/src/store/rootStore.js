import loginStore from './loginStore';
import registerStore from './registerStore';
import smesStore from './smesStore';

export class rootStore {
  constructor() {
      this.loginStore = new loginStore(this);     
      this.registerStore = new registerStore(this);
      this.smesStore = new smesStore(this);
  }
}

export default new rootStore();