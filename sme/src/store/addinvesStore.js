import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class addinvesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
    smesId = cookies.get("smesId");
    year = "";
    month = "";
    investercount = "";
    inves_list = [];
    idinvester = "";
    
  
  async inveslist() {
    console.log(this.year)
    console.log(this.month)
    console.log(this.investercount)
    
    const response = await instance.get(`/user/invester/inveslist`);
    this.inves_list = response.data;
    this.idinvester = response.data.idinvester;
    console.log("2"+this.inves_list)
          
    }
  
    get showList() {
      return this.inves_list;
    }

    async addinvescount() {
      try {
        const response = await instance.get(
          `/user/invester/addinvescount/${this.year}/${this.smesId}/${this.month}/${this.investercount}`);

          const data = response.data;
          console.log("1"+data.check);
          let datacheck = data.check;
          if (datacheck === "มีข้อมูลแล้ว") {
            console.log(data.check);
            this.message = "มีข้อมูลแล้ว";
          } else {
            window.location.href = "/authorizeInves";
          }
      } catch (error) {
        console.log(error);
      }
    }
    async promote() {
      try {
          const response = await instance.get(`/user/invester/promote/${this.idinvester}`
        );
        this.inveslist();
      } catch (error) {
        console.log(error);
      }
    }
  
    async demote() {
      try {
          const response = await instance.get(`/user/invester/demote/${this.idinvester}`
        );
        this.inveslist();
      } catch (error) {
        console.log(error);
      }
    }
  
    async delete() {
      try {
          const response = await instance.get(`/user/invester/delete/${this.idinvester}`
        );
        this.inveslist();
      } catch (error) {
        console.log(error);
      }
    }
  }


decorate(addinvesStore, {
    inves_list: observable,
    idinvester: observable,
    smesId: observable,
    year: observable,
    month: observable,
    investercount: observable,
    message: observable,
    promote: action,
    demote: action,
    delete: action,
    inveslist: action,
    addinvescount: action,
    showList: computed
});

export default addinvesStore;
