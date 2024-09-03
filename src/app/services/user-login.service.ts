import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User'

@Injectable({
  providedIn: 'root'
})
export class UserLoginService{
    private url='http://localhost:8080/';
    constructor(private http:HttpClient, private router: Router) { }

    public register(user:User):Observable<Object>{
        return this.http.post<User>(this.url+'userregistration',user);
    }

    public login(user:User):Observable<Object>{
        return this.http.post<User>(this.url+'userlogin',user);
    }
    userloggedin(){
        return !!sessionStorage.getItem('user')
    }
    userLoggedout(){
        sessionStorage.removeItem("user");
        this.router.navigate(['/userlogin']);
     
    }
    
}