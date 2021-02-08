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
  userid = "";

  async login() {
    try {
      const response = await instance.get(`/user/login/${this.username}/${this.password}`);
      let user_id;
      const data = response.data;
      const type = response.data.type;
      console.log(response.data.type);
      if (data.check !== 1) {
        console.log(data.check);
        user_id = 0;
        this.message = "ไม่พบบัญชีผู้ใช้";
      } 
      else {
        console.log(data.check);
        user_id = data.id;
        if (type == "wait") {
          this.message = "บัญชีรอรับการยืนยัน";
        }
        else {

          cookies.set("name", data.name, { path: "/", maxAge: 86400 });
          cookies.set("type", data.type, { path: "/", maxAge: 86400 });
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
