import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {NotFoundModule} from './not-found/not-found.module';


@NgModule({
  declarations: [
    AppComponent,
      //,apperrordirective,appcustomifdirective

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HomeModule,
    NotFoundModule,
    AppRoutingModule,
    //  Implemented Lazzy Loading for this module
    // TestingModule,
    //  DirectiveTestingModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
