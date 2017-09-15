import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-fashion-ying',
  templateUrl: './fashion-ying.component.html',
  styleUrls: ['./fashion-ying.component.css']
})
export class FashionYingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
