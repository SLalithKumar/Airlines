import { Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  page='userWelcome'
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/userlogin'])
  }
}
