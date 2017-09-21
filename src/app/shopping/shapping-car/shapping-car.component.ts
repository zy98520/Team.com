import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonalService} from '../../services/personal.service';
declare var $: any ;
@Component({
  selector: 'app-shapping-car',
  templateUrl: './shapping-car.component.html',
  styleUrls: ['./shapping-car.component.css'],
  providers: [PersonalService],
})
export class ShappingCarComponent implements OnInit {
 mes:any;
sum= 0;
none:any;or:[''];
  constructor(
    private perSer: PersonalService,
    private router: Router,
  ) { }
  ngOnInit() {
    let that = this;
    const body={'tel':sessionStorage.getItem('userId')}
    that.perSer.myshop(body, function (result) {
      if ( result.StateCode==0){that.none='空空如也~~~~';} else {
        that.mes= result;
        for(let i=0;i<that.mes.length;i++)
          that.mes[i].total= (that.mes[i].goodsprice) * (that.mes[i].shopsum);
        // that.all= (result[0].goodsprice) * (result[0].shopsum);
      }
    })
  }
  les(index){
    let mes=this.mes;
    if(  mes[index].shopsum>0) {
      mes[index].shopsum = mes[index].shopsum - 1;
      mes[index].total = (mes[index].goodsprice) * (mes[index].shopsum);
      if ($('#' + index).is(':checked') && mes[index].total >= 0) {
        this.sum = this.sum - mes[index].goodsprice;
      }
    }
  }
  add(index) {
    let mes = this.mes;
    mes[index].shopsum = mes[index].shopsum + 1;
    mes[index].total = (mes[index].goodsprice) * (mes[index].shopsum);
    if ($('#' + index).is(':checked') && this.sum >= 0) {
      this.sum = this.sum + mes[index].goodsprice;
    }
  }

  del(index){let that=this;
    let mes=this.mes;
     mes[index].del = index+'s';
    that.perSer.delshop({'id':mes[index].goodsid}, function (result) {
      if ( result==1){
        $('#'+index+'s').parent().parent().parent().remove();
        alert('删除成功！');
      }
    })
  }
  dan(index){
    let mes = this.mes;
    if($('#'+ index).is(':checked'))
    {this.sum= this.sum+mes[index].total;
    $('#pay_id').removeAttr("disabled");
    this.or[index]=mes[index].goodsid;
    }
    else{
      this.sum=this.sum-mes[index].total;
      this.or[index]='';
    }
  }
    quan(mes){
      if($(".quan").is(':checked'))
      { for(let i=0;i<mes.length;i++)
        this.sum=this.sum+mes[i].total;
        $("input[type='checkbox']").attr("checked", true);}
      else {
        $("input[type='checkbox']").removeAttr("checked");
        this.sum=0;
      }
    }

    back(){
      this.router.navigate(['/personal-center']);
    }
    // gopay (){let that=this;
    // const body={'tel': sessionStorage.getItem('userId'),}
    //   that.perSer.ordershow( function (result) {
    //     if ( result.StateCode==0){that.none='空空如也~~~~';} else {
    //     }
    //   })
    //   this.router.navigate(['/pay']);
    // }
}
