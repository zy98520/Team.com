import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-fashion-week',
  templateUrl: './fashion-week.component.html',
  styleUrls: ['./fashion-week.component.css']
})
export class FashionWeekComponent implements OnInit {


  newyok= [ ['ba1', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8'], ['ba11', 'ba12', 'ba13', 'ba14', 'ba15',
    'ba16', 'ba17', 'ba18']];
  lundon= [['new1', 'new2', 'new3', 'new4', 'new5', 'new6', 'new7', 'new8'], [ 'new11', 'new12',
    'new13', 'new14', 'new15', 'new16', 'new17', 'new18']];
  milan= [['ba4', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8'], ['ba11', 'ba12', 'ba13', 'ba14', 'ba15',
    'ba16', 'ba17', 'ba18']];
  paris= [['new6', 'new2', 'new3', 'new4', 'new5', 'new6', 'new7', 'new8'], [ 'new11', 'new12',
    'new13', 'new14', 'new15', 'new16', 'new17', 'new18']];
  url1: string;
  url2: string;
  show(ny) {
    this.url1 = ny[0];
    this.url2 = ny[1];

  }
  constructor(private router: Router, ) { }
  ngOnInit() {
    this.show(this.newyok);
    $('#review1').mouseenter(function () {
      $('#a').fadeIn(600);
    });
    $('#review1').mouseleave(function () {
      $('#a').fadeOut(600);
    });
    $('#review3').mouseenter(function () {
      $('#c').fadeIn(600);
    });
    $('#review3').mouseleave(function () {
      $('#c').fadeOut(600);
    });
    $('#review5').mouseenter(function () {
      $('#e').fadeIn(600);
    });
    $('#review5').mouseleave(function () {
      $('#e').fadeOut(600);
    });
    $('#review6').mouseenter(function () {
      $('#f').fadeIn(600);
    });
    $('#review6').mouseleave(function () {
      $('#f').fadeOut(600);
    });
    $(document).scrollTop(0);

  }
  public ying(): void {
    this.router.navigateByUrl('fashion-ying');
  }
  public wu(): void {this.router.navigateByUrl('fashion-wu');
  }
  public ou(): void {
    this.router.navigateByUrl('fashion-ou');
  }
}
