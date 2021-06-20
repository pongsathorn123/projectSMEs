import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class allProjectStore {
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
    category = "";

    async showall() {
        try {
            
            const response = await instance.get(`/user/allproject/show`);
            this.list = response.data;
            const data = response.data;
            console.log(data);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }
    async show3() {
        try {
            
            const response = await instance.get(`/user/allproject/show3/${this.category}`);
            this.list = response.data;
            const data = response.data;
            console.log(data);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }
    async show4() {
        try {
            
            const response = await instance.get(`/user/allproject/show4/${this.category}`);
            this.list = response.data;
            const data = response.data;
            console.log(data);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }
    async show5() {
        try {
            
            const response = await instance.get(`/user/allproject/show5/${this.category}`);
            this.list = response.data;
            const data = response.data;
            console.log(data);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }

    async show6() {
        try {
            
            const response = await instance.get(`/user/allproject/show6/${this.category}`);
            this.list = response.data;
            const data = response.data;
            console.log(data);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }
    async showcommercial() {
        try {
            const response = await instance.get(`/user/allproject/show2/ธุรกิจด้านการค้า`);
            this.list = response.data;
            const data2 = response.data;
            console.log(data2);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }
    async showservice() {
        try {
            const response = await instance.get(`/user/allproject/show2/ธุรกิจด้านการบริการ`);
            this.list = response.data;
            const data2 = response.data;
            console.log(data2);
            console.log(cookies.get("userType"));
            console.log(cookies.get("userId"));
        } catch (error) {
            console.log(error);
        }
    }
    async showmanufacturing() {
        try {
            const response = await instance.get(`/user/allproject/show2/ธุรกิจด้านการผลิต`);
            this.list = response.data;
            const data2 = response.data;
            console.log(data2);
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
            console.log("rrr"+cookies.get("smesId"));
            const response = await instance.get(`/user/allproject/show/${cookies.get("smesId")}`);
            this.data = response.data;
            console.log(this.detail);
            
            cookies.set("title", this.data.title, { path: "/", maxAge: 86400 });
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
decorate(allProjectStore, {
    api_host: observable,
    userId: observable,
    smesId: observable,
    name: observable,
    email: observable,
    title: observable,
    tel: observable,
    category: observable,
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
    showall: action,
    show3: action,
    showcommercial: action,
    showservice: action,
    showmanufacturing: action,
    showdetail: action,
    showList: computed,
    showdetailList: computed
  });

export default allProjectStore;
