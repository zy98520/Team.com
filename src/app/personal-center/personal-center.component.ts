import { Component, OnInit } from '@angular/core';
import {PersonalService} from './../services/personal.service';

import {Router} from '@angular/router';
declare var $: any
@Component({
  selector: 'app-personal',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: [PersonalService]
})
export class PersonalCenterComponent implements OnInit {
n:any;
  constructor(private personSer: PersonalService,
              private router: Router) {
  }
  shuzu=[['kt1','kt2','kt3','kt4','kt5'],['fj1','fj2','fj3','fj4','fj5'],
    ['xq1','xq2','xq3','xq4','xq5'],['mx2','mx1','mx5','mx3','mx4']];
   def:any;
   def1:string;
   fsq:any;

   top(){

     this.def=this.shuzu[0];

   }
   bottom(){
     if(this.def==this.shuzu[0]){
     this.def=this.shuzu[1]
     }
     else if(this.def==this.shuzu[1]){
       this.def=this.shuzu[2]
     }
     else{
       this.def=this.shuzu[3];
     }
   }
   dianji(index){
   this.def1=this.def[index];
     this.fsq=true;
   }



  ngOnInit() {
     this.n=1;
    this.def1=this.shuzu[1][4];
    this.def=this.shuzu[0];
    const that = this;
    $(function () {
      $('.change').click(function () {
        $('.wallpaper').animate({
          opacity:'1',
          height:'hide',
        },1000,'linear');

        $('.wallpaper').animate({
          height:'toggle',
        },2000,'linear');



      });


      $('#upload_file').change(function (e) {
        that.checkin();
        const file = e.target.files[0];
        preview(file);
        that.upload();
      });
      function preview(file) {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        const url = img.src;
        const $img = $(img);
        img.onload = function () {
          URL.revokeObjectURL(url);
          $('#preview').empty().append($img);
        }
      }
    })
  }
  checkin(){
    if(sessionStorage.getItem('userId')){
      const body ={ "telephone": sessionStorage.getItem('userId')};
      this.personSer.getUserIcon (body, function (result) {
        sessionStorage.setItem('icon', result[0].icon);
        $('#preview').append(`<img src='../../public/uploads/${result[0].icon}'>`);
      })
    }
    else { alert('你还未登陆，即将跳转至登录页面');
      this.router.navigate(['/login']);}
  }
  upload() {
    const formdata = new FormData($('#upload_form')[0]);
    formdata.append("userId", sessionStorage.getItem('userId'));
    const that = this;
    that.personSer.upload (formdata, function (result) {
      if (result.stateCode==1){
        alert('上传成功');
      }else {
        alert('上传失败');
      }
    })
  }
}

