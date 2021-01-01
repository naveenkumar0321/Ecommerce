import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagenotfoundComponent} from '../app/pagenotfound/pagenotfound.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'list', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, 
 { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule) },
 { path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
