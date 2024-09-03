import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  public getAllUsers():Observable<any>{
    return this.http.get(this.url+'getusers');
  }

  public updateUser(user:User):Observable<any>{
    return this.http.post<User>(this.url+'update',user);
  }
  public getUserById(user_id:number):Observable<any>{
    return this.http.get(this.url+'getuser/'+user_id);
  }
  public forgotpassword(user:User):Observable<any>{
    return this.http.put<User>(this.url+'forgotpassword',user);
  }

}