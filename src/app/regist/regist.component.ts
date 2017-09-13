import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';

import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
  providers: [UsersService]
})
export class RegistComponent implements OnInit {
  regist_res: string;
  constructor(
    private userSer: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  toregist (reg) {
    let that = this;
    that.userSer.regist (reg.form.value, function (result) {
      if ( result.StateCode ==0){
        that.regist_res = '用户名已被注册！';
      }else {
        sessionStorage.setItem('userId', reg.form.value.userId);
        sessionStorage.setItem('username', reg.form.value.username);
        sessionStorage.setItem('icon','icon_default.jpg');
        location.reload();
        alert( "注册成功");
        that.router.navigate(['/index']);
      }

    })
  }
}
