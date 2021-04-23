import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class myProjectStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    userId = cookies.get("userId");
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


    async show() {
        console.log(this.userId)
        try {
            debugger
            const response = await instance.get(`/user/myproject/show/${this.userId}`);
            this.list = response.data;
            const data = response.data;
            console.log(data);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }

    get showList() {
        
        return this.list;
    }
    

    async showdetail() {
        try {
            const response = await instance.get(`/user/allproject/show/${cookies.get("smesId")}`);
            this.data = response.data;
            console.log(this.detail);

            this.userId = this.data.userId
            this.name = this.data.name
            this.email = this.data.email
            this.title = this.data.title
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

}
decorate(myProjectStore, {
    api_host: observable,
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
    smesType: observable,
    show: action,
    // showdetail: action,
    // showList: computed,
    //showdetailList: computed
  });

export default myProjectStore;
