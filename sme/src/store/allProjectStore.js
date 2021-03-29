import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class allProjectStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
  user_id = cookies.get("user_id")
  detail ="";
  list = [];

    async show() {
        try {
            const response = await instance.get(`/user/allproject/show`);
            this.list = response.data;
            console.log(this.list);
        } catch (error) {
            console.log(error);
        }
    }

    get showList() {
        return this.list;
    }
}
decorate(allProjectStore, {
    api_host: observable,
    user_id: observable,
    detail: observable,
    description: observable,
    list: observable,
    show: action,
    showList: computed
  });

export default allProjectStore;
