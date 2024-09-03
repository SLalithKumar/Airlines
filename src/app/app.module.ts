import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { userregistrationComponent } from './userregistration/userregistration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BookingHistroyComponent } from './booking-histroy/booking-histroy.component';
import { UserLoginService } from './services/user-login.service';
import { UserauthGuard } from './userauth.guard';
import { AdminLoginService } from './services/admin-login.service';
import { AdminauthGuard } from './adminauth.guard';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AdminComponent,
    UserComponent,
    UserloginComponent,
    userregistrationComponent,
    AdminloginComponent,
    HomeComponent,
    AdminDashboardComponent,
    BookingDetailsComponent,
    ManageFlightComponent,
    ScheduleFlightComponent,
    UserDetailsComponent,
    UserDashboardComponent,
    ProfileComponent,
    UserHomeComponent,
    BookTicketComponent,
    BookingHistroyComponent,
    
    UserfeedbackComponent,
         ViewfeedbackComponent,
         PaymentComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    UserLoginService,
    UserauthGuard,
    AdminLoginService,
    AdminauthGuard
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
