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
  message2 = "";
  userId = "";
  name = "";
  email = "";
  tel = "";
  address = "";
  citizenId = "";
  userType = "";
  info = "";


  async login() {
    try {
      const response = await instance.get(`/user/login/login/${this.username}/${this.password}`);

      let userId;
      let userType;
      const data = response.data;
      

      if (data.check !== 1) {
        console.log(data.check);
        userId = 0;
        this.message = "ไม่พบบัญชีผู้ใช้";
      } 
      else {
        userId = data.userId;
        console.log(data.userType)
        if (data.userType == "admin") {
          cookies.set("userId", data.userId, { path: "/", maxAge: 86400 });
          cookies.set("username", data.username, { path: "/", maxAge: 86400 });
          cookies.set("name", data.name, { path: "/", maxAge: 86400 });
          cookies.set("userType", data.userType, { path: "/", maxAge: 86400 });
          window.location.href = "/authorize";
        }
        else {
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


async getInfo() {
  try {
    const response = await instance.get(
      `/user/login/info/${cookies.get("userId")}`
    );
    this.info = response.data;
    console.log(this.info);

    this.userId = this.info.userId
    this.username = this.info.username
    this.password = this.info.password
    this.name = this.info.name
    this.email = this.info.email
    this.tel = this.info.tel
    this.address = this.info.address
    this.citizenId = this.info.citizenId
    this.userType = this.info.userType
    // console.log(this.id);
    // console.log(this.username);
    // console.log(this.password);
    // console.log(this.name);
    // console.log(this.tel);
    // console.log(this.citizen_id);
    // console.log(this.room);
  } catch (error) {
    console.log(error);
  }
}

async edit() {
  try {
    const userId = cookies.get("userId");
    const password= this.password;
    const name= this.name;
    const email= this.email;
    const tel= this.tel;
    const address= this.address;
    
    await instance.get(
      `/user/login/edit/${userId}/${password}/${name}/${email}/${tel}/${address}`
    );
    // console.log(infoObject);
    this.message2 = "แก้ไขข้อมูลสำเร็จ";
  } catch (error) {
    console.log(error);
  }
}

async delete() {
  try {
    await instance.get(
      `/user/login/delete/${cookies.get("userId")}`
    );
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
  message2: observable,
  userId: observable,
  userType: observable,
  name: observable,
  email: observable,
  tel: observable,
  info: observable,
  address: observable,
  citizenId: observable,
  login: action,
  getInfo: action,
  edit: action,
  delete: action,
});

export default loginStore;
