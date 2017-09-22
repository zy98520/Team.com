import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonalService} from '../../services/personal.service';

declare var $: any ;
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
  providers: [PersonalService],
})
export class PayComponent implements OnInit {
  address:any;
  state1:any;
  x1=true;
  x2=false;
  homeid:any;
  every:any;
  arr3=['姑苏区','常熟市',];  arr1=['江苏','江西','山东'];  arr2=['苏州','南京','无锡'];
  constructor(
    private perSer: PersonalService,
    private router: Router,
  ) { }

  ngOnInit() {
    let that=this;
    that.perSer.showhome({'tel':sessionStorage.getItem('userId')},function (result) {
      if ( result.StateCode==0) {
      }else {
        that.address=result;
      }
    })

  }
  addhome(addForm){
    var form=addForm.form.value;
    var address=form.shen+form.city+form.qu;
    const body={'address':address,'you':form.you,'detail':form.detail,'name':
      form.name,'tel':form.tel,'usertel':sessionStorage.getItem('userId')}
    let that = this;
    that.perSer.addhome(body,function (result) {
      if ( result.StateCode==0) {
      }else {
        that.address.unshift(result[0][0]);
      }
    })
  }
  choose(index){
    this.address.state= false;
    this.address[index].state=true;
  }
  delhome(index){let that=this;
  that.address[index].del=index+'w';
    that.perSer.delhome({'addid':that.address[index].addid},function (result) {
      if ( result.StateCode==0) {
      }else {
       $('#'+index+'w').parent().parent().remove();
      }
    })
  }
  editor(index,addForm){
   this.every=this.address[index];
   this.state1=true;
    const a=this.address[index];
    this.x1=false;this.x2=true;
    const add=a.address;const add1=a.address;
    // addForm.form.value.detail=a.detailadd;
    $('#detail').val(a.detailadd);
    $('#you').val(a.postem);
    $('#tel').val(a.shoptel);
    $('#name').val(a.shopname);
    $('#province_id').val(a.address.substring(0,2));
    $('#city_id').val(add.substring(2,4));
    $('#area_id').val(add1.substring(4,7));
    addForm.form.value.you=a.postem;
    addForm.form.value.detail=a.detailadd;
    addForm.form.value.tel=a.shoptel;
    // addForm.form.value.name=a.shopname;
    // addForm.form.value.name=a.shopname;
    // addForm.form.value.name=a.shopname;
    // addForm.form.value.name=a.shopname;
  }
  update(addForm){let that=this;
    alert(addForm.form.value.you);
    that.perSer.updatehome(addForm.form.value,function (result) {
      if ( result.StateCode==0) {
      }else {
       alert('修改成功');
        $('#center_hidden_id').css({"display":"none"});
      }
    })
  }
  usenew(){
    this.state1=true;
    this.x1=true;this.x2=false;
    $('#myform')[0].reset();
  }
  cancel(){
    this.state1=false;
  }
  public pay():void{
    this.router.navigateByUrl("payto");
}

}
