/**
 * Created by lzhan on 2017/9/3.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PersonalCenterComponent } from './personal-center.component';
import { MyflowComponent } from './myflow/myflow.component';
import { MyorderComponent } from './myorder/myorder.component';
import { PayComponent } from './pay/pay.component';
import { PaytoComponent } from './payto/payto.component';
import { CenterComponent } from './center/center.component';
import { ShappingCarComponent } from './shapping-car/shapping-car.component';

const routes: Routes = [

  {
    path: 'personal-center',
    component: PersonalCenterComponent,
    children: [
      {
        path: '',
        component: CenterComponent,
      },
      {
        path: 'center',
        component: CenterComponent,
      },
      {
        path: 'shapping-car',
        component: ShappingCarComponent,
      },
      {
        path: 'payto',
        component: PaytoComponent,
      },
      {
        path: 'myorder',
        component:MyorderComponent,
      },
      {
        path: 'myflow',
        component: MyflowComponent,
      },
      // {
      //   path: 'getUserIcon',
      //   component: PersonalCenterComponent,
      // },

      {
        path: 'pay',
        component: PayComponent,
      },
     ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCenterRoutingModule {
}
