/**
 * Created by lzhan on 2017/9/3.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PersonalCenterComponent } from './personal-center.component';
import { ShappingCarComponent } from '../shopping/shapping-car/shapping-car.component';
import { PayComponent } from '../personal-center/pay/pay.component';
import { SearchComponent } from '../search/search.component';
const routes: Routes = [

  {
    path: 'personal',
    component: PersonalCenterComponent,
    children: [
      {
        path: 'upload',
        component: PersonalCenterComponent,
      },
      {
        path: 'shapping-car',
        component: ShappingCarComponent,
      },
      {
        path: 'getUserIcon',
        component: PersonalCenterComponent,
      },

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
export class PersonalRoutingModule {
}
