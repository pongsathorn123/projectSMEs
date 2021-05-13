import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import editSmes from "../user/editSmes";
import instance from "./instance/axiosInstance";

export class editSmesStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    userId ="";
    name ="";
    email ="";
    title ="";
    tel ="";
    userType ="";
    dateStart ="";
    dateEnd ="";
    moneyMax ="";
    moneyMin ="";
    detail ="";
    facebook ="";
    lineid ="";
    list = [];
    list2 = [];
    data = [];
    description = "";
    authorize = "";
    smesType = "";
    smesId = cookies.get("smesId");
    detailId = "";


    async showdetail() {
        try {
            const response = await instance.get(`/user/allproject/show/${this.smesId}`);
            this.data = response.data;
            console.log(this.detail);

            this.smesId = this.data.smesId
            this.detailId = this.data.detailId
            this.userId = this.data.userId
            this.name = this.data.name
            this.email = this.data.email
            this.title = this.data.title
            this.description = this.data.description
            this.tel = this.data.tel
            this.userType = this.data.userType
            this.dateStart = this.data.dateStart
            this.dateEnd = this.data.dateEnd
            this.moneyMax = this.data.moneyMax
            this.moneyMin = this.data.moneyMin
            this.detail = this.data.detail
            this.facebook = this.data.facebook
            this.lineid = this.data.lineid
            this.smesType = this.data.smesType
            this.authorize = this.data.authorize



        } catch (error) {
            console.log(error);
        }
    }

    get showdetailList() {
        return this.detail;
    }

    async editSmes() {
        try {
          const smesId = this.smesId;
          const title = this.title;
          const description = this.description;
          const dateStart = this.dateStart;
          const dateEnd = this.dateEnd;
          const moneyMin = this.moneyMin;
          const moneyMax = this.moneyMax
          const detail = this.detail;
          const tel = this.tel;
          const email = this.email;
          const facebook = this.facebook;
          const lineid = this.lineid;
          console.log(smesId);
          console.log(title);
          console.log(description);
          console.log(dateStart);
          console.log(dateEnd);
          console.log(moneyMin);
          console.log(moneyMax);
          console.log(detail);
          console.log(tel);
          console.log(email);
          console.log(facebook);
          console.log(lineid);

          await instance.get(
            `/user/editSmes/edit/${smesId}/${title}/${description}/${dateStart}/${dateEnd}/${moneyMin}/${moneyMax}/${detail}/${tel}/${email}/${facebook}/${lineid}`
          );
          // console.log(infoObject);
          this.message2 = "แก้ไขข้อมูลสำเร็จ";
        } catch (error) {
          console.log(error);
        }
      }

      

} 
decorate(editSmesStore, {
    api_host: observable,
    message2: observable,
    userId: observable,
    smesId: observable,
    name: observable,
    email: observable,
    title: observable,
    tel: observable,
    userType: observable,
    dateStart: observable,
    dateEnd: observable,
    moneyMax: observable,
    moneyMin: observable,
    detail: observable,
    tel: observable,
    email: observable,
    facebook: observable,
    lineid: observable,
    data: observable,
    list: observable,
    smesId: observable,
    description: observable,
    smesType: observable,
    showdetail: action,
    showdetailList: computed
  });

export default editSmesStore;
