import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bloodcomponent } from './blood/blood.component';
import { Historycomponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ 
  {path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'blood',component:Bloodcomponent},
{path:'history',component:Historycomponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
