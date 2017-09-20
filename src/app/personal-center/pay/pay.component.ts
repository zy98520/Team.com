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
    $(function () {
      function objInt(obj) {
        return $(obj).html('<option>请选择</option>');
      }
      var arrData={
        江苏:{苏州:'姑苏区,常熟市',
          上海:'1号,型号1-2-2'},
        江西:{萍乡:'莲花县,上栗县',
          宜春:'袁州区,高安市'},
        山东:{济南:'长清区,天桥区',
          青岛:'市北区,市南区'}
      };
      $.each(arrData,function(pro){
        $('#province_id').append('<option>'+pro+'</option>');
      });
      $('#province_id').change(function(){
        objInt('#city_id');
        objInt('#area_id');
        $.each(arrData,function(pro,pS){
          if($('#province_id option:selected').text()==pro){
            $.each(pS,function(city,are){
              $('#city_id').append('<option>'+city+'</option>');
            });
            $('#city_id').change(function(){
              objInt('#area_id');
              $.each(pS,function(city,are){
                if($('#city_id option:selected').text()==city){
                  $.each(are.split(","),function(){
                    $('#area_id').append('<option>'+this+'</option>');
                  })
                }
              })
            });
          }
        })
      });

    });
  }
  addhome(addForm){
    alert(addForm.form.value.name);
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
