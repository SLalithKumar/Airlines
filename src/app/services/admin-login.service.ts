import { Admin } from './../model/Admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService{
    private url='http://localhost:8080/';
    constructor(private http:HttpClient, private router: Router) { }

    public login(admin:Admin):Observable<Object>{
        return this.http.post<User>(this.url+'adminlogin',admin);
    }
    adminloggedin(){
      return !!sessionStorage.getItem('admin')
  }
  adminLoggedout(){
      sessionStorage.removeItem("admin");
      this.router.navigate(['/adminlogin']);
   
  }
}