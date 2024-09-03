import { Router } from '@angular/router';
import { User } from '../model/User';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user=new User();
  
  invalidLogin = false;
  a:any;
  c:any;
  constructor(private service:UserLoginService,private router:Router) { }
  

  ngOnInit(): void {
    
    
  }
  

  userloggedIn(){
    console.log(this.user);
    this.service.login(this.user).subscribe(data=>{
      this.a=data;
      
      sessionStorage.setItem("user", this.a.user_id) ;     
      this.router.navigate(['/userdashboard'])
    },error=>{
      console.log(error);
    })
   }
   forgot(){
     console.log(this.user)
    this.service.register(this.user).subscribe(data=>{
      this.c=data;
      sessionStorage.setItem("user", this.c.user_id);
      this.router.navigate(["/forgotpw"])
    }, error=>{
      console.log(error);
    })
  }

   userreg(){
    this.service.register(this.user).subscribe(data=>{
      alert("Registered Succesfull!!!");
      this.router.navigate(["/userdashboard"]);
    },
    error=>{
      alert("User not Registered!!!");
    }
    )

  }
   back(){
     this.router.navigate(['/user'])
   }

   onSubmit(data:any){
    console.warn(data)
  }

  
}
