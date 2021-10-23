import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { UserhistoryService } from './userhistory.service';
import { UserdbService } from './userdb.service';
import { AadharService } from './issue.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [UserhistoryService,UserdbService,AadharService],
  bootstrap: [AppComponent]
})
export class AppModule { }
