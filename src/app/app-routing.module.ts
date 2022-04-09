import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {InstaGuard} from "./instaGuard/insta-guard.service";

const routes: Routes = [{path: '/', component: AppComponent, canActivate: [InstaGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
