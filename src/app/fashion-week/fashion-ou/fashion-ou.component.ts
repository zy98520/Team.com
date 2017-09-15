import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-fashion-ou',
  templateUrl: './fashion-ou.component.html',
  styleUrls: ['./fashion-ou.component.css']
})
export class FashionOuComponent implements OnInit {

  constructor(private router: Router
  ) { }

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
