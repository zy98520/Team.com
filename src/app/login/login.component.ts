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
  n;

  constructor( private userSer: UsersService,
               private router: Router,
               private  glo:GlobalPropertyService

  ) {}
  ngOnInit() {
    this.glo.hiddenNavs=true;//初始化

  }
  toLogin(login_form) {
    let that = this;
    that.n=0;
    that.userSer.login(login_form.form.value, function (result) {
      if ( result.StateCode == 0){
        $('.login_ti span').css('display','block');
        that.login_res = '用户名或密码错误！';
      }else {location.reload();
        that.tel = login_form.form.value.userId;
        that.name=result[0].username;
        sessionStorage.setItem('userId', that.tel);
        sessionStorage.setItem('username',that.name);
        sessionStorage.setItem('icon',result[0].icon);
        that.router.navigate(['/index']);
      }
    })
  }
  ngOnDestroy(){
  console.log('personal -ngDestroy');
  this.glo.hiddenNavs=false;
}
}

