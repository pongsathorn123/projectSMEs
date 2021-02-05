import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class registerStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  username = "";
  password = "";
  repassword = "";
  name = "";
  email = "";
  tell = "";
  address = "";
  message = "";

  async register() {
    try {
      if (this.username == "" || this.password == "" || this.repassword == "" || this.name == "" || this.email == "" ) {
        this.message = "กรุณากรอกข้อมูลให้ครบ";
        this.props.registerStore.username = "";
        this.props.registerStore.password = "";
        this.props.registerStore.repassword = "";
      }
      else {
        if (this.password != this.repassword) {
          this.message = "รหัสผ่านไม่ตรงกัน";
          this.props.registerStore.username = "";
          this.props.registerStore.password = "";
          this.props.registerStore.repassword = "";
        } 
        else {
          const response = await instance.get(`/user/userRegister/check/${this.username}`);
          const data = response.data;
          if (data.length == 1) {
            this.message = "มีบัญชีผู้ใช้นี้แล้ว";
            this.props.registerStore.username = "";
            this.props.registerStore.password = "";
            this.props.registerStore.repassword = "";
          }
          else {
            const response2 = await instance.get(`/user/userRegister/insert/${this.username}/${this.password}/${this.name}/${this.email}?person_id=${this.person_id}`);
            window.location.href = "/";
            this.message = "";
          }
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  }
}

decorate(registerStore, {
  username: observable,
  password: observable,
  repassword: observable,
  name: observable,
  email: observable,
  tell: observable,
  address: observable,
  message: observable,
  register: action,
});

export default registerStore;
