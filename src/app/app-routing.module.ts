/**
 * Created by lzhan on 2017/9/3.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SharesComponent} from './shares/shares.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LooksComponent } from './looks/looks.component';
import { LovesComponent } from './loves/loves.component';
import { GirlsComponent } from './looks/girls/girls.component';
import { BoysComponent } from './looks/boys/boys.component';
import { FashionWeekComponent } from './fashion-week/fashion-week.component';
import { FashionYingComponent } from './fashion-week/fashion-ying/fashion-ying.component';
import { FashionWuComponent } from './fashion-week/fashion-wu/fashion-wu.component';
import { FashionOuComponent } from './fashion-week/fashion-ou/fashion-ou.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShappingCarComponent } from './shopping/shapping-car/shapping-car.component';
import { PayComponent } from './personal-center/pay/pay.component';
import { PaytoComponent } from './personal-center/payto/payto.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'showboys',
    component: BoysComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'index/:val',
    component: IndexComponent
  },
  {
    path: 'loves',
  component: LovesComponent
},
  {
    path: 'comment',
    component: SharesComponent
  },
  {
    path: 'fashion-week',
    component: FashionWeekComponent
  },
  {
    path: 'fashion-ying',
    component: FashionYingComponent
  },
  {
    path: 'fashion-wu',
    component: FashionWuComponent
  },
  {
    path: 'fashion-ou',
    component: FashionOuComponent
  },
  {
    path: 'shares',
    component: SharesComponent
  },
  {
    path: 'girls',
    component: GirlsComponent
  },
  {
    path: 'boys',
    component: BoysComponent
  },
  {
    path: 'looks',
    component: LooksComponent
  },
  {
    path: 'personal-center',
    component: PersonalCenterComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'shapping-car',
    component: ShappingCarComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'payto',
    component: PaytoComponent
  },
  {
    path: '',
    redirectTo: '/index/1',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
