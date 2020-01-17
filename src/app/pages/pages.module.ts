import { TweetsComponent } from './tweets/tweets.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AuthGuardService } from '../services/auth-guard.service';
const pagesRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "tweets", component: TweetsComponent,canActivate:[AuthGuardService] },
]

@NgModule({
  declarations: [
    LoginComponent,
    TweetsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(pagesRoutes),
    ReactiveFormsModule,
    TranslateModule.forChild()
  ]
})
export class PagesModule { }
