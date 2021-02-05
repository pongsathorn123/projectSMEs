import loginStore from './loginStore';
import registerStore from './registerStore';

export class rootStore {
  constructor() {
      this.loginStore = new loginStore(this);     
      this.registerStore = new registerStore(this);
  }
}

export default new rootStore();