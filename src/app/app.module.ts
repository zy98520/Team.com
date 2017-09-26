import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';


import { AppComponent } from './app.component';
import { LooksComponent } from './looks/looks.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LovesComponent } from './loves/loves.component';
import { SharesComponent } from './shares/shares.component';
import { RegistComponent } from './regist/regist.component';


import { SharesAreaComponent } from './shares/shares-area/shares-area.component';


import {AppRoutingModule} from './app-routing.module';
import { GirlsComponent } from './looks/girls/girls.component';
import { BoysComponent } from './looks/boys/boys.component';
import { FashionWeekComponent } from './fashion-week/fashion-week.component';
import { FashionYingComponent } from './fashion-week/fashion-ying/fashion-ying.component';
import { FashionWuComponent } from './fashion-week/fashion-wu/fashion-wu.component';
import { FashionOuComponent } from './fashion-week/fashion-ou/fashion-ou.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { StartComponent } from './start/start.component';








import {GlobalPropertyService} from './services/global-property.service';
import {PersonalCenterModule} from './personal-center/personal-center.module';




@NgModule({
  declarations: [
    AppComponent,
    LooksComponent,
    IndexComponent,
    LoginComponent,
    SearchComponent,
    PageNotFoundComponent,
    LovesComponent,
    SharesComponent,
    GirlsComponent,
    BoysComponent,
    FashionWeekComponent,
    FashionYingComponent,
    FashionWuComponent,
    FashionOuComponent,
    ShoppingComponent,
    RegistComponent,
    SharesAreaComponent,
    StartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonalCenterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlobalPropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
