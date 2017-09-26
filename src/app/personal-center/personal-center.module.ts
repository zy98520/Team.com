import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { PersonalCenterComponent } from './personal-center.component';
import { MyflowComponent } from './myflow/myflow.component';
import { MyorderComponent } from './myorder/myorder.component';
import { PayComponent } from './pay/pay.component';
import { PaytoComponent } from './payto/payto.component';
import { ShappingCarComponent } from './shapping-car/shapping-car.component';

//导入路由模块

import {PersonalCenterRoutingModule} from './personal-center-routing.module';
import { CenterComponent } from './center/center.component';



@NgModule({
  declarations: [
    PersonalCenterComponent,
    MyflowComponent,
    MyorderComponent,
    PayComponent,
    PaytoComponent,
    ShappingCarComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonalCenterRoutingModule
  ],
  providers: [],
  bootstrap: [PersonalCenterComponent]
})
export class PersonalCenterModule { }
