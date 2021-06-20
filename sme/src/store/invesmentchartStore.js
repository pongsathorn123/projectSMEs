import { computed, observable, autorun, action, decorate } from "mobx";
import cookies from "../cookies/cookie";
import instance from "./instance/axiosInstance";

export class invesmentchartStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  
    year = "2021";
    smesId = cookies.get("smesId");
    inves_list = []; 
    dataChart = [];
    m1 = "";
    m2 = "";
    m3 = "";
    m4 = "";
    m5 = "";
    m6 = "";
    m7 = "";
    m8 = "";
    m9 = "";
    m10 = "";
    m11 = "";
    m12 = "";
    count = [];
    sum = "";
    
  
  async info() {
    console.log(this.year)
    
    
    const response = await instance.get(`/user/invesment/info/${this.year}/${this.smesId}`);
    this.m1 = response.data.m1;
    this.m2 = response.data.m2;
    this.m3 = response.data.m3;
    this.m4 = response.data.m4;
    this.m5 = response.data.m5;
    this.m6 = response.data.m6;
    this.m7 = response.data.m7;
    this.m8 = response.data.m8;
    this.m9 = response.data.m9;
    this.m10 = response.data.m10;
    this.m11 = response.data.m11;
    this.m12 = response.data.m12;
    this.dataChart = [
      {
        เดือน: 'มกราคม', จำนวนเงิน: this.m1, 
      },
      {
        เดือน: 'กุมภาพันธ์', จำนวนเงิน: this.m2,
      },
      {
        เดือน: 'มีนาคม', จำนวนเงิน: this.m3,
      },
      {
        เดือน: 'เมษายน', จำนวนเงิน: this.m4,
      },
      {
        เดือน: 'พฤษภาคม', จำนวนเงิน: this.m5,
      },
      {
        เดือน: 'มิถุนายน', จำนวนเงิน: this.m6,
      },
      {
        เดือน: 'กรกฎาคม', จำนวนเงิน: this.m7,
      },
      {
        เดือน: 'สิงหาคม', จำนวนเงิน: this.m8,
      },
      {
        เดือน: 'กันยายน', จำนวนเงิน: this.m9,
      },
      {
        เดือน: 'ตุลาคม', จำนวนเงิน: this.m10,
      },
      {
        เดือน: 'พฤศจิกายน', จำนวนเงิน: this.m11,
      },
      {
        เดือน: 'ธันวาคม', จำนวนเงิน: this.m12,
      },
    ];
    
    console.log(this.m1)
    console.log(this.m2)
    console.log(this.m3)
    console.log(this.m4)
    console.log(this.m5)
    console.log(this.dataChart)
    // for(let i = 0 ;i <= this.month.length; i++) {
    //     console.log(i)
        
    //     for(let j =0 ; i<= response.data.length ; j++) {
    //         console.log(response.data[i].month)
    //         if (this.month[i] == response.data[j].month){
    //             this.count[i] = response.data[j].investercount;
    //         }
    //         else {
    //             this.count[i] = 0;
    //         } 
    //         j--;
    //     }
        
    // }
        // this.month.forEach((element, index) => { 
        //     if (response.data[1].month == element){
        //         this.count[index] = response.data[index].investercount;
        //     }
        //     else {
        //         this.count[index] = 0;
        //     }  
            
        //   });
    }

    get showList() {
        
        return this.inves_list;
    }
}
    
decorate(invesmentchartStore, {
    year: observable,
    count: observable,
    m1: observable,
    m2: observable,
    m3: observable,
    m4: observable,
    m5: observable,
    m6: observable,
    m7: observable,
    m8: observable,
    m9: observable,
    m10: observable,
    m11: observable,
    m12: observable,
    dataChart: observable,
    inves_list: observable,
    showList: computed,
    info: action,
});

export default invesmentchartStore;
