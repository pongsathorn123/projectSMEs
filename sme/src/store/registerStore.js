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
  tel = "";
  citizenId = "";
  address = "";
  userType = "";
  message = "";
  
  async register() {
    console.log(this.userType)
    try {
      if (this.username == "" || this.password == "" || this.repassword == "" || this.name == "" || this.email == "" || this.tel == "" || this.citizenId == "" ) {
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
          const response = await instance.get(`/user/register/check/${this.username}`);
          const data = response.data;
          if (data.length == 1) {
            this.message = "มีบัญชีผู้ใช้นี้แล้ว";
            this.props.registerStore.username = "";
            this.props.registerStore.password = "";
            this.props.registerStore.repassword = "";
          }
          else {
            const response2 = await instance.get(`/user/register/insert/${this.username}/${this.password}/${this.name}/${this.email}/${this.tel}/${this.address}/${this.citizenId}/${this.userType}`);
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
  selectedUsertype: observable,
  username: observable,
  password: observable,
  repassword: observable,
  name: observable,
  email: observable,
  citizen_id: observable,
  tel: observable,
  address: observable,
  userType: observable,
  message: observable,
  register: action,
});

export default registerStore;
