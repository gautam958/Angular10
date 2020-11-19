import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {NotFoundModule} from './not-found/not-found.module';
 


//import { sharedmodules }  from './SharedModules/sharedmodules.module';
 
@NgModule({
  declarations: [
    AppComponent, 
      //,apperrordirective,appcustomifdirective
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    HomeModule,
    NotFoundModule,
    //sharedmodules,
    AppRoutingModule, 
    //  Implemented Lazzy Loading for this module
    // TestingModule,
    //  DirectiveTestingModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
