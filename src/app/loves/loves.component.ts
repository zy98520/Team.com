import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {GlobalPropertyService} from './../services/global-property.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-loves',
  templateUrl: './loves.component.html',
  styleUrls: ['./loves.component.css'],
  providers: [UsersService]
})
export class LovesComponent implements OnInit {
loves:any;
  constructor(
    private userSer: UsersService,
    private router: Router,
    private  glo:GlobalPropertyService
  ) {

  }

  ngOnInit() {
    let that=this;
    that.userSer.showloves( function (result) {
      if ( result.StateCode == 0){
      }else {
        that.loves=result;
      }
    })

  }
godetail(id){
  this.router.navigate(['/shopping', id]);
}
}
