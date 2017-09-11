import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-fashion-week',
  templateUrl: './fashion-week.component.html',
  styleUrls: ['./fashion-week.component.css']
})
export class FashionWeekComponent implements OnInit {

  constructor(  private router:Router,) { }

  ngOnInit() {
  }
  public ying():void{
    this.router.navigateByUrl("fashion-ou");
  }
  public wu():void{
    this.router.navigateByUrl("fashion-wu");
  }
  public ou():void{
    this.router.navigateByUrl("fashion-ying");
  }
}
