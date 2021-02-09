import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class smesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  userId = cookies.get("userId");
  smesType = "";
  title = "";
  description = "";


  async smes() {
      debugger
    try {
      if (this.smesType == "" || this.title == "" ) {
        debugger
        this.message = "กรุณากรอกข้อมูลให้ครบ";
      }
      else {
        debugger
           
            const response = await instance.get(`/user/smes/insert/${this.userId}/${this.title}/${this.description}/${this.smesType}`);
            console.log(response)
        
      }
      
    } catch (error) {
      console.log(error);
    }
  }
}

decorate(smesStore, {
  userId: observable,
  selectedSmestype: observable,
  title: observable,
  smesType: observable,
  description: observable,
  smes: action,
});

export default smesStore;