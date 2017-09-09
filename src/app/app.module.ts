import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"



import { AppComponent } from './app.component';
import { LooksComponent } from './looks/looks.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FishionWeekComponent } from './fishion-week/fishion-week.component';
import { LovesComponent } from './loves/loves.component';
import { SharesComponent } from './shares/shares.component';

//导入路由
import {AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LooksComponent,
    IndexComponent,
    LoginComponent,
    SearchComponent,
    PageNotFoundComponent,
    FishionWeekComponent,
    LovesComponent,
    SharesComponent
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
