import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  payload = {
    email: "trail@addenda.tech",
    password: "password",
    returnSecureToken: true
  };
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit() {}

createForm(){

}

  login() {
    this.authService.login(this.payload).subscribe(
      (res:any) => {
        localStorage.setItem('idToken',res.idToken)
this.router.navigateByUrl('');
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}
