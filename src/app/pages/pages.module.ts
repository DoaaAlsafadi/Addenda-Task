import { TweetsComponent } from './tweets/tweets.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const pagesRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "tweets", component: TweetsComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    TweetsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(pagesRoutes)
  ]
})
export class PagesModule { }
