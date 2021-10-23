import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'userhistory',component : UserhistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
