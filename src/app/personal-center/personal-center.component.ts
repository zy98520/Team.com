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

  constructor(private personSer: PersonalService,
              private router: Router) {
  }

  ngOnInit() {
    const that = this;
    $(function () {
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
