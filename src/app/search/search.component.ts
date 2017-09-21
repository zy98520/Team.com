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
json:any;
  constructor(
    private personSer: PersonalService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.json= this. route.snapshot.paramMap.get('json');
  }
godetail(id){
  this.router.navigate(['/index',id]);
}
}
