import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class smesdataStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  
    year = "2021";
    month = "Feb";
    no1 = "";
    no2 = "";
    no3 = "";
    asean = "";
    china = "";
    usa = "";
    japan = "";
    eu27 = "";
    message = "";
  
  async info() {
    console.log(this.year)
    console.log(this.month)
    
    const response = await instance.get(`/user/smesData/info/${this.year}/${this.month}`);
    this.data = response.data;
    ///const data = response.data;
    //console.log(data);
          if (this.data.check !== 1) {
            this.no1 = "ไม่พบข้อมูล";
            this.no2 = "ไม่พบข้อมูล";
            this.no3 = "ไม่พบข้อมูล";
            this.asean = "ไม่พบข้อมูล";
            this.china = "ไม่พบข้อมูล";
            this.usa = "ไม่พบข้อมูล";
            this.japan = "ไม่พบข้อมูล";
            this.eu27 = "ไม่พบข้อมูล";
           
          }
          else {
            this.no1 = this.data.exportNo1;
            this.no2 = this.data.exportNo2;
            this.no3 = this.data.exportNo3;
            this.asean = this.data.asean;
            this.china = this.data.china;
            this.usa = this.data.usa;
            this.japan = this.data.japan;
            this.eu27 = this.data.eu27;
          }
    }

    async add() {
      try {
        const response = await instance.get(
          `/user/smesData/add/${this.year}/${this.month}/${this.no1}/${this.no2}/${this.no3}/${this.asean}/${this.china}/${this.usa}/${this.japan}/${this.eu27}`);

          const data = response.data;
          console.log("1"+data.check);
          let datacheck = data.check;
          if (datacheck === "มีข้อมูลแล้ว") {
            console.log(data.check);
            this.message = "มีข้อมูลแล้ว";
          } else {
            this.message = "เพิ่มข้อมูลสำเร็จ";
          }



      } catch (error) {
        console.log(error);
      }
    }
  }


decorate(smesdataStore, {
    year: observable,
    month: observable,
    no1: observable,
    no2: observable,
    no3: observable,
    asean: observable,
    china: observable,
    usa: observable,
    japan: observable,
    eu27: observable,
    message: observable,
    info: action,
    add: action,
});

export default smesdataStore;
