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
      const response = await instance.get(
        `/user/login/${this.username}/${this.password}`
      );
      let user_id;
      const data = response.data;
      const type = response.data.type;
      //console.log(response.status);
      if (data.check !== 1) {
        console.log(data.check);
        user_id = 0;
        this.message = "ไม่พบ";
      } 
      else {
        console.log(data.check);
        user_id = data.id;
        if (type == "wait") {
          this.message = "บัญชีรอรับการยืนยัน";
        }
        else {
          this.userid = user_id;
          cookies.set("user_id", user_id, { path: "/", maxAge: 86400 });
          cookies.set("name", data.name, { path: "/", maxAge: 86400 });
          cookies.set("type", data.type, { path: "/", maxAge: 86400 });
          window.location.href = "/create";
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
