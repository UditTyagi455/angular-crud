import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import {MaterialModuleModule} from './material-module/material-module.module'
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    LoginComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModuleModule,
    FormsModule
  ],
  providers: [ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
