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
  message = "";
  description = "";
  
  
  async smes() {
    console.log(this.userId)
    console.log(this.smesType)
    console.log(this.title)
    console.log(this.description)
      debugger
    try {
      if (this.smesType == "" || this.title == "" || this.description == "") {
        debugger
        this.message = "กรุณากรอกข้อมูลให้ครบ";
      }
      else {
        debugger
           
            const response = await instance.get(`/user/smes/insert/${this.userId}/${this.title}/${this.description}/${this.smesType}`);
            console.log(response)
            window.location.href = "/createProjectDetail";
        
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
  message: observable,
  smes: action,
});

export default smesStore;