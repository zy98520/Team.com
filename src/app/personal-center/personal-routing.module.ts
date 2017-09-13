/**
 * Created by lzhan on 2017/9/3.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PersonalCenterComponent } from './personal-center.component';
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
        path: 'getUserIcon',
        component: PersonalCenterComponent,
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
