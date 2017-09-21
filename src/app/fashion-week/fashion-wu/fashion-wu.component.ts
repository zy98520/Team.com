import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-fashion-wu',
  templateUrl: './fashion-wu.component.html',
  styleUrls: ['./fashion-wu.component.css']
})
export class FashionWuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).scrollTop(0);

  }
  ying() {
    this.router.navigate(['/fashion-ying']);
  }
  wu() {
    this.router.navigate(['/fashion-wu']);
  }
  ou() {
    this.router.navigate(['/fashion-ou']);
  }
}
