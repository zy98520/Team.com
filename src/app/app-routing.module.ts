/**
 * Created by lzhan on 2017/9/3.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LooksComponent } from './looks/looks.component';
import { FishionWeekComponent } from './fishion-week/fishion-week.component';
import { LovesComponent } from './loves/loves.component';
import { GirlsComponent } from './looks/girls/girls.component';
import { BoysComponent } from './looks/boys/boys.component';



const routes: Routes = [


  {
    path: 'index/:val',
    component: IndexComponent
  },
  {
    path: 'loves',
  component: LovesComponent
},
  {
    path: 'shares',
    component: SearchComponent
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
    path: 'fishion-week',
    component: FishionWeekComponent
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
export class AppRoutingModule {}
