import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLoginService } from './services/admin-login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {


  constructor(private adminauth: AdminLoginService, private router:Router){}

  canActivate() : boolean{
    if (this.adminauth.adminloggedin()){
      return true
    }else{
      this.router.navigate(['/adminlogin'])
      return false
    }
  }
  
}
