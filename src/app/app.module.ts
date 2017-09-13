import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { LooksComponent } from './looks/looks.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LovesComponent } from './loves/loves.component';
import { SharesComponent } from './shares/shares.component';
import { RegistComponent } from './regist/regist.component';

//导入路由
import {AppRoutingModule} from './app-routing.module';
import { GirlsComponent } from './looks/girls/girls.component';
import { BoysComponent } from './looks/boys/boys.component';
import { FashionWeekComponent } from './fashion-week/fashion-week.component';
import { FashionYingComponent } from './fashion-week/fashion-ying/fashion-ying.component';
import { FashionWuComponent } from './fashion-week/fashion-wu/fashion-wu.component';
import { FashionOuComponent } from './fashion-week/fashion-ou/fashion-ou.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShappingCarComponent } from './shopping/shapping-car/shapping-car.component';
import { UsersService} from './services/users.service';



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
    PersonalCenterComponent,
    ShoppingComponent,
    ShappingCarComponent,
    UsersService,
    PersonalCenterComponent,
    RegistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
