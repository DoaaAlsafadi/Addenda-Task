import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  // payload = {
  //   email: "trail@addenda.tech",
  //   password: "password",
  //   returnSecureToken: true
  // };
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { 
    this.createForm()
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      returnSecureToken: new FormControl(true, Validators.required)
    })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.authService.setInLocalStorage('idToken',res.idToken)
        this.router.navigateByUrl('tweets');
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}
