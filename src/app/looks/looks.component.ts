import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-looks',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.css']
})
export class LooksComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }
  ngOnInit() {
    $(".text").mouseover(function () {
      $(".text").addClass('animated  pulse')
    })
    $(".text").mouseout(function () {
      $(".text").removeClass('animated'+ 'animated pulse')
    })
  }
public girls():void{
    this.router.navigateByUrl("girls");
}
  public boys():void{
    this.router.navigateByUrl("boys");
  }
}
