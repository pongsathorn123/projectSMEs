import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class reportStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  
  userId = cookies.get("userId")
  username = cookies.get("username")
  title = cookies.get("title")
  smesId = cookies.get("smesId")
  report = "";
  list = [];
  list2 = [];


  async reportSme() {
    console.log(this.userId)
    console.log(this.username)
    console.log(this.title)
    console.log(this.smesId)
    console.log(this.report)
    try {
      if (this.report == "" ) {
        this.message = "กรุณากรอกข้อมูลให้ครบ";
      }
      
          else {
            const response = await instance.get(`/user/report/insert/${this.smesId}/${this.title}/${this.report}/${this.username}/${this.userId}`);
            window.location.href = "/authorizeReport";
            this.message = "";
          }
        
      
    } catch (error) {
      console.log(error);
    }
  }

  async show() {
    try {
        const response = await instance.get(`/user/report/show`);
        this.list = response.data;
        const data = response.data;
        console.log(data);
        console.log(cookies.get("smesId"));
    } catch (error) {
        console.log(error);
    }
}

get showList() {
        
  return this.list;
}

async show2() {
  try {
      const response = await instance.get(`/user/report/show/${this.smesId}`);
      this.list2 = response.data;
      const data = response.data;
      console.log(data);
      console.log(cookies.get("userType"));
      console.log(cookies.get("userId"));
      console.log(cookies.get("smesId"));
  } catch (error) {
      console.log(error);
  }
}

get showList2() {
      
return this.list2;
}

async promote() {
  try {
      const response = await instance.get(`/user/authorize/promote/${this.smesId}`
    );
    this.show();
  } catch (error) {
    console.log(error);
  }
}

async demote() {
  try {
      const response = await instance.get(`/user/authorize/demote/${this.smesId}`
    );
    this.show();
  } catch (error) {
    console.log(error);
  }
}

}



decorate(reportStore, {
  userId: observable,
  list: observable,
  list2: observable,
  username: observable,
  report: observable,
  title: observable,
  smesId: observable,
  reportSme: action,
  promote: action,
  demote: action,
  showList: computed,
  showList2: computed,
});

export default reportStore;
