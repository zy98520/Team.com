import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {GlobalPropertyService} from './../services/global-property.service'

import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  login_res: string;
  tel: string = '';
  name:string = '';
  // _val:string='';

  constructor( private userSer: UsersService,
               private router: Router,
               private  glo:GlobalPropertyService

  ) {}
  ngOnInit() {
    this.glo.hiddenNavs=true;//初始化

  }
  toLogin(login_form) {
    let that = this;
    that.userSer.login(login_form.form.value, function (result) {
      if ( result.StateCode == 0){
        that.login_res = '用户名或密码错误！';
      }else {
        location.reload();
        that.tel = login_form.form.value.userId;
        that.name = login_form.form.value.username;
        sessionStorage.setItem('userId', that.tel);
        sessionStorage.setItem('username', that.name);
        that.router.navigate(['/index']);
      }
    })
  }
  // toIndex(){
  //   this.router.navigate(['/index',this._val]);
  //   this.glo.serverUrl='http://127.0.0.1:8000'
  // }
  ngOnDestroy(){
  console.log('personal -ngDestroy');
  this.glo.hiddenNavs=false;
}
}

