import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../model/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  public getAllPayments():Observable<any>{
    return this.http.get(this.url+'getpayments');
  } 

  public addPayment(payment:Payment):Observable<any>{
    return this.http.post<Payment>(this.url+'postpayment',payment);
  }
}