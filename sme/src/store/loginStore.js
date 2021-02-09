import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class loginStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  username = "";
  password = "";
  message = "";
  userId = "";


  async login() {
    try {
      const response = await instance.get(`/user/login/${this.username}/${this.password}`);

      let userId;
      const data = response.data;
      

      if (data.check !== 1) {
        console.log(data.check);
        userId = 0;
        this.message = "ไม่พบบัญชีผู้ใช้";
      } 
      else {
         {
          cookies.set("userId", data.userId, { path: "/", maxAge: 86400 });
          cookies.set("name", data.name, { path: "/", maxAge: 86400 });
          cookies.set("userType", data.userType, { path: "/", maxAge: 86400 });
          window.location.href = "/home";
          this.message = "";
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

decorate(loginStore, {
  api_host: observable,
  username: observable,
  password: observable,
  message: observable,
  userid: observable,
  login: action,
});

export default loginStore;
