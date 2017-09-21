import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any

@Component({
  selector: 'app-fashion-ou',
  templateUrl: './fashion-ou.component.html',
  styleUrls: ['./fashion-ou.component.css']
})
export class FashionOuComponent implements OnInit {

  constructor(private router: Router
  ) { }

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
