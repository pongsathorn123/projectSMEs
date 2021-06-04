import loginStore from './loginStore';
import registerStore from './registerStore';
import smesStore from './smesStore';
import smesdetailStore from './smesdetailStore';
import smesdataStore from './smesdataStore';
import authorStore from './authorStore';
import allProjectStore from './allProjectStore';
import editSmesStore from './editSmesStore';
import myProjectStore from './myProjectStore';
import addinvesStore from './addinvesStore';
import inveschartStore from './inveschartStore';
import reportStore from './reportStore';

export class rootStore {
  constructor() {
      this.myProjectStore = new myProjectStore(this);
      this.reportStore = new reportStore(this);
      this.authorStore = new authorStore(this);
      this.loginStore = new loginStore(this);     
      this.registerStore = new registerStore(this);
      this.smesStore = new smesStore(this);
      this.smesdetailStore = new smesdetailStore(this);
      this.smesdataStore = new smesdataStore(this);
      this.allProjectStore = new allProjectStore(this);
      this.editSmesStore = new editSmesStore(this);
      this.addinvesStore = new addinvesStore(this);
      this.inveschartStore = new inveschartStore(this);
      
  }
}

export default new rootStore();