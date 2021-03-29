import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class authorStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  smeId = "";
  user_list = [];

  async list() {
    try {
      const response = await instance.get(
        `/user/authorize/list`
      );
      this.user_list = response.data;
      console.log(this.user_list);
    } catch (error) {
      console.log(error);
    }
  }

  async promote() {
    try {
        const response = await instance.get(`/user/authorize/promote/${this.smesId}`
      );
      this.list();
    } catch (error) {
      console.log(error);
    }
  }

  async demote() {
    try {
        const response = await instance.get(`/user/authorize/demote/${this.smesId}`
      );
      this.list();
    } catch (error) {
      console.log(error);
    }
  }

  async delete() {
    try {
        const response = await instance.get(`/user/authorize/delete/${this.smesId}`
      );
      this.list();
    } catch (error) {
      console.log(error);
    }
  }
  get showList() {
    return this.user_list;
  }
}

decorate(authorStore, {
  username: observable,
  user_list: observable,
  list: action,
  promote: action,
  demote: action,
  delete: action,
  showList: computed
});

export default authorStore;
