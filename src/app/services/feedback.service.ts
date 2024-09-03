
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFeedback } from '../model/userfeedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService{
    private url='http://localhost:8080/';
    constructor(private http:HttpClient) { }

    public feedbackpost(feed: UserFeedback): Observable<Object>{
        return this.http.post<UserFeedback>(this.url+'userfeedback',feed);
    }
    public getAllFeedback():Observable<any>{
        return this.http.get(this.url+'getfeedback'); //admin view
      }
}