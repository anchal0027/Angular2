import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { parentComponent } from './modules/parentcomponent/parent.component';
import { childComponent } from './modules/childcomponent/child.component';
import {LoginComponent} from './modules/login/login.component';
import {RegisterComponent} from './modules/register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    parentComponent,
    childComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
     FormsModule,
     ReactiveFormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
