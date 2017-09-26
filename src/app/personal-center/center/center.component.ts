import { Component, OnInit } from '@angular/core';
import {PersonalService} from './../../services/personal.service';
import {GlobalPropertyService} from './../../services/global-property.service'

import {Router} from '@angular/router';
declare var $: any
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
  providers: [PersonalService]
})
export class CenterComponent implements OnInit {
  _val:string='';
  mes: any ;
  n:any;state:any;
  tu:any;back:any;statem:any;
  state1:any;state2;
  regist_res: string;
  constructor(private personSer: PersonalService,
              private router: Router,
              private  glo:GlobalPropertyService
  ) {
  }
  shuzu=[['kt1.jpg','kt2.jpg','kt3.jpg','kt4.jpg','kt5.jpg'],['fj1.jpg','fj2.jpg','fj3.jpg','fj4.jpg','fj5.jpg'],
    ['xq1.jpg','xq2.jpg','xq3.jpg','xq4.jpg','xq5.jpg'],['mx2.jpg','mx1.jpg','mx5.jpg','mx3.jpg','mx4.jpg']];
  def:any;
  def1:string;
  fsq:any;

  top(){

    this.def=this.shuzu[0];

  }
  bottom(){
    if(this.def==this.shuzu[0]){
      this.def=this.shuzu[1]
    }
    else if(this.def==this.shuzu[1]){
      this.def=this.shuzu[2]
    }
    else{
      this.def=this.shuzu[3];
    }
  }
  dianji(index){
    let def='personal_images/'+this.def[index];
    this.back[0].background=def;
    this.fsq=true;
    this.tu =def;
  }

  showm(){
    this.statem=true;
  }
  hid(){
    this.statem=false;
  }

  toregist (reg) {
    this.statem=false;}
  ngOnInit() {
    this.n=1;
    this.def1=this.shuzu[1][4];
    this.def=this.shuzu[0];
    const that = this;
    that.showicon();
    this.statem=false;
    // this.glo.hiddenNavs=true;//初始化

  }
  toIndex(){
    this.router.navigate(['/index',this._val]);
    this.glo.serverUrl='http://127.0.0.1:8000'
  }
  ngOnDestroy(){
    console.log('personal -ngDestroy');
    // this.glo.hiddenNavs=false;
  }
  ngAfterContentInit(){
    const that = this;
    const those = that;
    $('.change').click(function () {
      $('.wallpaper').animate({
        opacity:'1',
        height:'hide',
      },1000,'linear');

      $('.wallpaper').animate({
        height:'toggle',
      },2000,'linear');
    });
    $('#upload_file').change(function (e) {
      const file = e.target.files[0];
      preview(file);
      those.upload();
    });
    function preview(file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      const url = img.src;
      const $img =$(img);
      console.log($img);
      img.onload = function () {
        URL.revokeObjectURL(url);
        $('#preview').empty().append($img);
        // $('#preview').empty().append($img);
      }
    }

  }
  showicon(){
    let that=this;
    const body ={ "telephone": sessionStorage.getItem('userId')};
    this.personSer.getUserIcon (body, function (result) {
      that.back=result;
      sessionStorage.setItem('icon',result[0].icon);
    })
  }
  upload() {
    const formdata = new FormData($('#upload_form')[0]);
    formdata.append("userId", sessionStorage.getItem('userId'));
    const that = this;
    that.personSer.upload(formdata, function (result) {
      if (result.stateCode==0){
        alert('上传失败');
      }else {
        alert('上传成功');
        that.mes = result;

      }
    })
  }
  change(){
    const that = this;
    let lu=that.tu;
    that.personSer.change({'tu':lu,'tel':sessionStorage.getItem('userId')},function (result) {
    })
  }
  showb(){
    this.state=true;
  }
  textname(){
    this.state1=true;
  }
  textput(){
    this.state2=true;
  }
  updaten(myForm){
    this.state1=false;
    this.state=false;
    this.back[0].username=myForm.form.value.username;
  }
  updaten1(myForm){
    this.state2=false;
    this.back[0].email=myForm.form.value.useremail;

  }
}

