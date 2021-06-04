import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class smesdetailStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  userId = cookies.get("userId");
  smesId = "";
  dateStart = "";
  dateEnd = "";
  moneyMax = "";
  moneyMin = "";
  detail = "";
  tel = "";
  email = "-";
  facebook = "-";
  lineid = "-";
  message = "";
  info = "";
  name = "";
  
  
  async data() {
    try {
      const response = await instance.get(`/user/smesDetail/data`);
      const data = response.data;
      this.smesId = data.smesId;
      console.log(this.smesId);
      this.getInfo();
     
  }catch (error) {
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
    this.name = this.info.name
    this.email = this.info.email
    this.tel = this.info.tel
  } catch (error) {
    console.log(error);
  }
}

async addsmesdetail() {
  console.log(this.userId)
  console.log(this.dateStart)
  console.log(this.dateEnd)
  console.log(this.moneyMax)
  console.log(this.moneyMin)
  console.log(this.detail)
  console.log(this.name)
  console.log(this.tel)
  console.log(this.email)
  console.log(this.facebook)
  console.log(this.lineid)
    try {
      debugger
        if (this.dateStart == "" || this.dateEnd == "" || this.moneyMax == "" ||this.moneyMin == "" || this.detail == ""  || this.tel == "" ) {
        this.message = "กรุณากรอกข้อมูลให้ครบ";
        }
        else {
        {
            const response = await instance.get(`/user/smesDetail/insert/${this.smesId}/${this.userId}/${this.dateStart}/${this.dateEnd}/${this.moneyMax}/${this.moneyMin}/${this.detail}/${this.name}/${this.tel}/${this.email}/${this.facebook}/${this.lineid}`);
            window.location.href = "/authorizeSme";
            this.message = "";
            }
        }
        
        
    } catch (error) {
        console.log(error);
    }
    }
}

decorate(smesdetailStore, {
  userId: observable,
  smedId: observable,
  dateStart: observable,
  dateEnd: observable,
  moneyMax: observable,
  moneyMin: observable,
  detail: observable,
  tel: observable,
  name: observable,
  email: observable,
  facebook: observable,
  lineid : observable,
  message : observable,
  addsmesdetail: action,
  data: action,
  getinfo: action,
});

export default smesdetailStore;