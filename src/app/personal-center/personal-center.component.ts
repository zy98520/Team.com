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
mes: any ;
  constructor(private personSer: PersonalService,
              private router: Router) {
  }

  ngOnInit() {
    $(function () {
      const that = this;
      $('#upload_file').change(function (e) {
        const file = e.target.files[0];
        preview(file);
        that.upload();
      });
      that.showicon();
      function preview(file) {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        const url = img.src;
        const $img =$(img);
        img.onload = function () {
          URL.revokeObjectURL(url);
          $('#preview').empty().append($img);
          $('#preview1').empty().append($img);
        }
      }
    })
  }
  showicon(){
    const body ={ "telephone": sessionStorage.getItem('userId')};
    this.personSer.getUserIcon (body, function (result) {
      $('#preview').empty().append(`<img src='http://localhost:3000/uploads/${result[0].icon}>`);
      $('#preview1').empty().append(`<img src='http://localhost:3000/uploads/${result[0].icon}>`);
    })
  }
  upload() {
    const formdata = new FormData($('#upload_form')[0]);
    formdata.append("userId", sessionStorage.getItem('userId'));
    const that = this;
    that.personSer.upload (formdata, function (result) {
      if (result.stateCode==0){
        alert('上传失败');
      }else {
        alert('上传成功');
        that.mes= result;
      }
    })
  }
}

