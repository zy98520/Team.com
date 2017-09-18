import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD


import {Router} from '@angular/router';
import {PersonalService} from '../../services/personal.service';
=======
import {Router} from '@angular/router';
>>>>>>> a796b260685af9194e781ce145a9ed6f8722c7ee
declare var $: any ;
@Component({
  selector: 'app-shapping-car',
  templateUrl: './shapping-car.component.html',
  styleUrls: ['./shapping-car.component.css'],
  providers: [PersonalService],
})
export class ShappingCarComponent implements OnInit {
<<<<<<< HEAD
 mes:any;
sum=0;
none:any;
  constructor(
    private perSer: PersonalService,
    private router: Router,
  ) { }
  les(index,mes){
    if(  mes[index].shopsum>=1)
     mes[index].shopsum= mes[index].shopsum-1;
    mes[index].total=(mes[index].goodsprice) * (mes[index].shopsum);
  }
  add(index,mes){
    mes[index].shopsum= mes[index].shopsum+1;
    mes[index].total=(mes[index].goodsprice) * (mes[index].shopsum);
  }
  del(index,mes){
     mes[index].del = index+'1';
     alert( mes[index].del);
    $('#'+ mes[index].del).parent().parent().parent().remove();
  }
  dan(index,mes){
    if($("input[type='checkbox']").is(':checked'))
      this.sum=this.sum+mes[index].total;
    else{
      this.sum=this.sum-mes[index].total;
    }
  }
  quan(mes){
    if($("input[type='checkbox']").is(':checked'))
      for(let i=0;i<mes.length;i++)
        this.sum=this.sum+mes[i].total;
    $("input[type='checkbox']").attr("checked", true);
  }
// dan(index,mes){
// mes[index].id= index ;
// if($('#'+mes [index].id).check){
//   alert('有')
//   $('#'+mes [index].id).prop("checked",false);
//   this.sum=this.sum+mes[index].total;}
// else
//   {
// alert('没有'); $('#'+mes [index].id).prop("checked",true);
//   this.sum=this.sum+mes[index].total;}
// }
=======

  constructor(  private router:Router,) {

  }

>>>>>>> a796b260685af9194e781ce145a9ed6f8722c7ee
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
    // $(function () {
    //   $('#price').html($('#singlePrice_id').html());
    //   // 全选
    //   $('.quan').change(function () {
    //     if (this.checked) {
    //       $('[type="checkbox"]').map(function () {
    //
    //         this.checked = true;
    //         $('#pay_id').css('background', 'red').css('color', 'white');
    //         $('#goods_num_id').html($('#shuzi_id').val());
    //         $('#sumPrice_id').html($('#price').html());
    //       });
    //     }
    //     else {
    //       $('[type="checkbox"]').map(function () {
    //         this.checked = false;
    //         $('#goods_num_id').html(0);
    //         $('#sumPrice_id').html(0);
    //       });
    //     }
    //
    //   });
    //   // 取消全选
    //   $('[type="checkbox"]').change(function () {
    //     var i = 0;
    //     if (!this.checked) {
    //       $('.quan').map(function () {
    //         this.checked = false;
    //         $('#goods_num_id').html(0);
    //         if ($('#sumPrice_id').html() >= $('#price').html()) {
    //           $('#sumPrice_id').html(0);
    //         }
    //       });
    //     }
    //
    //     else { i++;
    //       $('#goods_num_id').html(i);
    //
    //       $('#sumPrice_id').html($('#price').html());
    //     }
    //   });})
  //     // 加减
  //     $('#jian_id').click(function () {
  //       var num = $('#shuzi_id').val();
  //       num--;
  //       if (num >= 1) {
  //         $('#shuzi_id').val(num);
  //       }
  //
  //       var singlePrice = $('#singlePrice_id').html();
  //       var shuzi = $('#shuzi_id').val();
  //       $('#price').html(singlePrice * shuzi);
  //     });
  //     $('#jia_id').click(function () {
  //       var num = $ ('#shuzi_id').val();
  //       num++;
  //       $('#shuzi_id').val(num);
  //
  //       var singlePrice = $('#singlePrice_id').html();
  //       var shuzi = $('#shuzi_id').val();
  //       $('#price').html(singlePrice * shuzi);
  //
  //       if ($('#goods_num_id').html()== 0) {
  //         $('#sumPrice_id').html(0);
  //       }
  //       else {
  //         $('#sumPrice_id').html($('#price').html());
  //       }
  //
  //     });
  //     // 删除
  //     $('#del_id').click(function () {
  //       $(this).parent().parent().parent().remove();
  //     }); })
  }
back(){
  this.router.navigate(['/personal-center']);
}
  gopay(){
    this.router.navigate(['/payto']);
  }
<<<<<<< HEAD
=======

  public gopay():void{
      this.router.navigateByUrl("pay");
  }


>>>>>>> a796b260685af9194e781ce145a9ed6f8722c7ee
}
