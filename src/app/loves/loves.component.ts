import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {GlobalPropertyService} from './../services/global-property.service';

import {Router} from '@angular/router';
declare var $: any
@Component({
  selector: 'app-loves',
  templateUrl: './loves.component.html',
  styleUrls: ['./loves.component.css'],
  providers: [UsersService]
})
export class LovesComponent implements OnInit {
loves:any;n=0;
  a=[72,80,88,96,104];
number=['1','2','3','4','5'];
  constructor(
    private userSer: UsersService,
    private router: Router,
    private  glo:GlobalPropertyService
  ) {

  }

  ngOnInit() {
this.show(0);

  }
godetail(id){
  this.router.navigate(['/shopping', id]);
}
pra(index){
  let that=this;
  that.n=index;
  if(that.n==index){
    that.n = that.n + 1;
    $('#' + index).css('background-position-x', '-3px').css('background-position-y', '-5px');
    that.loves[index].praise = that.loves[index].praise + 1;
    that.userSer.addloves({'id': that.loves[index].goodsid}, function (result) {
    })
  }
}
show(index){
  let that=this;
  that.userSer.showloves({'start':that.a[index]},function (result) {
    if ( result.StateCode == 0){
    }else {
      that.loves=result[0];
    }
  })
}
}
