import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class smesdetailStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  userId = cookies.get("userId");
  dateStart = "";
  dateEnd = "";
  moneyMax = "";
  moneyMin = "";
  detail = "";
  tel = "";
  email = "";
  facebook = "";
  lineid = "";
  

async addsmesdetail() {
    debugger
    try {
        debugger
        if (this.dateStart == "" || this.dateEnd == "" || this.moneyMax == "" || this.detail == "" || this.email == "" || this.tel == "" ) {
        this.message = "กรุณากรอกข้อมูลให้ครบ";
        }
        else {
            debugger
        {
            const response = await instance.get(`/user/smesDetail/insert/${this.userId}/${this.dateStart}/${this.dateEnd}/${this.moneyMax}/${this.moneyMin}/${this.detail}/${this.tel}/${this.email}/${this.facebook}/${this.lineid}`);
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
  dateStart: observable,
  dateEnd: observable,
  moneyMax: observable,
  moneyMin: observable,
  detail: observable,
  tel: observable,
  email: observable,
  facebook: observable,
  lineid : observable,
  addsmesdetail: action,
});

export default smesdetailStore;