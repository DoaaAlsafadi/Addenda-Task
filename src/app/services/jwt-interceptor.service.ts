import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from'./auth.service'
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.authService.isAuthenticated()) {
        const token = localStorage.getItem('idToken') 
          request = request.clone({
              setHeaders: {
                  Authorization: 'Bearer '+ token
              }
          });
      }
      return next.handle(request);
  }
}
