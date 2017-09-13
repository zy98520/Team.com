import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-fashion-week',
  templateUrl: './fashion-week.component.html',
  styleUrls: ['./fashion-week.component.css']
})
export class FashionWeekComponent implements OnInit {


  newyok= [ ['ba1', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8', 'ba9', 'ba10'], ['ba11', 'ba12', 'ba13', 'ba14', 'ba15',
    'ba16', 'ba17', 'ba18', 'ba19', 'ba20']];
  lundon= [['new1', 'new2', 'new3', 'new4', 'new5', 'new6', 'new7', 'new8', 'new9', 'new10'], [ 'new11', 'new12',
    'new13', 'new14', 'new15', 'new16', 'new17', 'new18', 'new19', 'new20']];
  milan= [['ba4', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8', 'ba9', 'ba10'], ['ba11', 'ba12', 'ba13', 'ba14', 'ba15',
    'ba16', 'ba17', 'ba18', 'ba19', 'ba20']];
  paris= [['new6', 'new2', 'new3', 'new4', 'new5', 'new6', 'new7', 'new8', 'new9', 'new10'], [ 'new11', 'new12',
    'new13', 'new14', 'new15', 'new16', 'new17', 'new18', 'new19', 'new20']];
  url1: string;
  url2: string;
  show(ny) {
    this.url1 = ny[0];
    this.url2 = ny[1];
  }


  constructor(private router: Router, ) { }
  ngOnInit() {
    this.show(this.newyok);
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
