import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {GlobalPropertyService} from './../services/global-property.service'

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
    private  glo:GlobalPropertyService

  ) { }

  ngOnInit() {
    this.glo.hiddenNavs=true;//初始化

  }
  toregist (reg) {
    let that = this;
    that.userSer.regist (reg.form.value, function (result) {
      if ( result.StateCode ==0){
        that.regist_res = '用户名已被注册！';
      }else {
        sessionStorage.setItem('userId', reg.form.value.userId);
        sessionStorage.setItem('username', result[0].username);
        // sessionStorage.setItem('icon','icon_default.jpg');
        location.reload();
        alert( "注册成功");
        that.router.navigate(['/index']);
      }

    })
  }
  ngOnDestroy(){
    console.log('personal -ngDestroy');
    this.glo.hiddenNavs=false;
  }
}
