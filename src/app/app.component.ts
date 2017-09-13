import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
tel: string;
name: string;
constructor(
) {

}
  ngOnInit() {
    this.tel= sessionStorage .getItem('userId');
    this.name = sessionStorage .getItem('username');
  }
  end(){
    sessionStorage.setItem('userId','');
    this.tel = sessionStorage .getItem('userId');
  }
}
