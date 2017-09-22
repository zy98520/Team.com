import { Component, OnInit } from '@angular/core';
import {PersonalService} from './../services/personal.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
// import {GlobalPropertyService} from './../services/global-property.service';

import {Router} from '@angular/router';
declare var $: any

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [PersonalService],
})
export class SearchComponent implements OnInit {
  res:any;
  constructor(
    private personSer: PersonalService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    let that=this;
    const json= this. route.snapshot.paramMap.get('json');
    that.personSer.search({'word':json}, function (result) {
      that.res=result;
    })
  }
godetail(id){
  this.router.navigate(['/shopping',id]);
}
}
