import { Component, OnInit } from '@angular/core';
import {GlobalPropertyService} from './services/global-property.service'

declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
tel: string;
name: string;
  _hiddenNavs:boolean;

constructor(
  private  glo:GlobalPropertyService
) {

}
  ngOnInit() {
    this._hiddenNavs=this.glo.hiddenNavs;
    function Add_Data() {
      var top = $("#fix1").offset().top;
      var title = $("#title1").offset().top;

      var scrolla = $(window).scrollTop();
      var cha = parseInt(top) - parseInt(scrolla);
      if (cha<=0) {
        $("#fix1").addClass("navbar-fixed-top");
        $("#fix1").addClass("ng2");
        $("#fix1").addClass("ng4 a");
      }
      if (parseInt(scrolla)<parseInt(title)) {
        $("#fix1").removeClass("navbar-fixed-top");
        $("#fix1").removeClass("ng2");
        $("#fix1").removeClass("ng4 a");

      }
    };
    $(window).scroll(Add_Data);

    this.tel= sessionStorage .getItem('userId');
    this.name = sessionStorage .getItem('username');
  }
  ngAfterContentChecked(){
    this._hiddenNavs=this.glo.hiddenNavs;

  }
  end(){
    sessionStorage.setItem('userId','');
    this.tel = sessionStorage .getItem('userId');
  }
}
