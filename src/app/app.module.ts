import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Interceptor } from './interceptors/httpInterceptor';
import { InterceptorModule } from './interceptor.module';
import { RouterRoutingModule } from './router/router-routing.module';

import { FormsModule } from '@angular/forms';

import { VenderComponent } from './vender/vender.component';
import { HomeComponent } from './home/home.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    VenderComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterRoutingModule,
    InterceptorModule,
    HttpModule
  ],
  providers: [
    
    DataService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
