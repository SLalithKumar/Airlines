import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from './services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {

  constructor(private userauth: UserLoginService, private router:Router){}

  canActivate() : boolean{
    if (this.userauth.userloggedin()){
      return true
    }else{
      this.router.navigate(['/userlogin'])
      return false
    }
  }
}
    /*route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}*/
