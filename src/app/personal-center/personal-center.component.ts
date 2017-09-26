import { Component, OnInit } from '@angular/core';
// import {PersonalService} from './../services/personal.service';
import {GlobalPropertyService} from './../services/global-property.service'

import {Router} from '@angular/router';
declare var $: any
@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: []
})
export class PersonalCenterComponent implements OnInit {
  _val:string='';
// mes: any ;
// n:any;state:any;
// tu:any;back:any;statem:any;
//   state1:any;state2;
// regist_res: string;
  constructor(
    // private personSer: PersonalService,
              private router: Router,
  private  glo:GlobalPropertyService
) {
  }
//   shuzu=[['kt1.jpg','kt2.jpg','kt3.jpg','kt4.jpg','kt5.jpg'],['fj1.jpg','fj2.jpg','fj3.jpg','fj4.jpg','fj5.jpg'],
//     ['xq1.jpg','xq2.jpg','xq3.jpg','xq4.jpg','xq5.jpg'],['mx2.jpg','mx1.jpg','mx5.jpg','mx3.jpg','mx4.jpg']];
//    def:any;
//    def1:string;
//    fsq:any;
//
//    top(){
//
//      this.def=this.shuzu[0];
//
//    }
//    bottom(){
//      if(this.def==this.shuzu[0]){
//      this.def=this.shuzu[1]
//      }
//      else if(this.def==this.shuzu[1]){
//        this.def=this.shuzu[2]
//      }
//      else{
//        this.def=this.shuzu[3];
//      }
//    }
//    dianji(index){
//      let def='personal_images/'+this.def[index];
//    this.back[0].background=def;
//    this.fsq=true;
//    this.tu =def;
//    }
//
//   showm(){
//      this.statem=true;
// }
// hid(){
//   this.statem=false;
// }
//
//   toregist (reg) {
//   this.statem=false;}
  ngOnInit() {
    this.glo.hiddenNavs=true;//初始化
  }

  toIndex(){
    this.router.navigate(['index']);
    this.glo.serverUrl='http://127.0.0.1:8000'
  }
  ngOnDestroy(){
    console.log('personal -ngDestroy');
    this.glo.hiddenNavs=false;
  }
}

