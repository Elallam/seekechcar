import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { BookingServiceService } from 'src/app/shared/services/booking-service.service';
import { Booking, Car } from 'src/app/shared/services/model/model';
import { ListingDetailsComponent } from '../../listings/listing-details/listing-details.component';
import { ListingGridComponent } from '../../listings/listing-grid/listing-grid.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { RegisterComponent } from '../../authentication/register/register.component';
import { LoginComponent } from '../../authentication/login/login.component';
import { ForgotPasswordComponent } from '../../authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../../authentication/reset-password/reset-password.component';
import { BookingPaymentComponent } from '../booking-payment/booking-payment.component';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';
import { Error404Component } from '../../error/error404/error404.component';
import { Error500Component } from '../../error/error500/error500.component';
import { PricingComponent } from '../../pages/pricing/pricing.component';
import { GalleryComponent } from '../../pages/gallery/gallery.component';
import { FaqComponent } from '../../pages/faq/faq.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data/data.service';
import { CarService } from 'src/app/shared/services/car.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { __await } from 'tslib';
import { MessageClient } from 'cloudmailin';
import { R3SelectorScopeMode } from '@angular/compiler';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})  
export class BookingListComponent implements OnInit{
  public routes: Routes = [
    {path: '/listings/listing-details/:licenceNumber', component : ListingDetailsComponent},
    {path: '/listings/listing-grid', component : ListingGridComponent},
    {path: '/pages/about-us' , component: AboutUsComponent},
    {path: '/authentication/register', component: RegisterComponent},
    {path: '/authentication/login', component: LoginComponent},
    {path: '/authentication/forgot-password', component: ForgotPasswordComponent},
    {path: '/authentication/reset-password', component: ResetPasswordComponent},
    {path: '/booking/booking-payment', component: BookingPaymentComponent},
    // {path : '/booking/booking-list/:licenceNumber/:startDate/:endDate', component: BookingListComponent}, 
    {path : '/booking/booking-list', component: BookingListComponent}, 
    {path: '/booking/invoice-details', component: InvoiceDetailsComponent}, 
    {path: '/error/error404', component: Error404Component}, 
    {path: '/error/error500', component: Error500Component}, 
    {path: '/pages/pricing', component: PricingComponent}, 
    {path: '/pages/faq', component: FaqComponent},
    {path: '/pages/gallery', component: GalleryComponent}
  ];
  
  public booking!: Booking;
  public car!: Car;
  public startDate!: Date;
  public endDate!: Date;
  public amount!:number;
  //Authentication part
  public user!: SocialUser;
  public loggedIn!: boolean;

  public pickUp!: string;
  public dropOff = this.route.snapshot.paramMap.get('dropOff')!;
  public userName!: string;
  public phone!: string;
  constructor(private bookingService: BookingServiceService, 
    private data : DataService,
    private http: HttpClient,
    private route : ActivatedRoute,
    private carService: CarService,
    private authService: SocialAuthService,
    ){}
  
  ngOnInit(): void {
    // this.authService.authState.subscribe(
    //   (user) => {
    //     this.user = user;
    //     this.loggedIn = (user != null);
    //   });
      this.getBooking();
      this.getCar();
    // this.route.paramMap.subscribe(
    //   () => {
        // this.handleCarDetails();
      // });
  }

  handleCarDetails() {
    // const licenceNumber: string  = this.route.snapshot.paramMap.get('carId')!;
    // // const licenceNumber: string  ='1245 A 123';
    // const sDate = this.route.snapshot.paramMap.get('startDate')!;
    // const eDate = this.route.snapshot.paramMap.get('endDate')!;
    // this.startDate  = new Date(sDate);
    // this.endDate = new Date(eDate);
    // this.pickUp =  this.route.snapshot.paramMap.get('pickUp')!;
    // this.dropOff =  this.route.snapshot.paramMap.get('dropOff')!;
    // this.userName = this.route.snapshot.paramMap.get('userName')!;
    // this.phone = this.route.snapshot.paramMap.get('phone')!;
  //   const licenceNumber: string = this.booking.carId;
  //   this.carService.getCar(licenceNumber).subscribe(
  //     data => {
  //       this.car = data;
  //       // console.log("test " + licenceNumber + ", start Date : " + startDate + ", endDate: "  + endDate);
  //     }
  //    );
  // }
  }

  getBooking(){
    this.data.currentBooking.subscribe(data=>{
      this.booking = data;
      console.log(this.booking);
    });
  }

  getCar(){
    this.data.currentCar.subscribe(data => {
      this.car = data;
      console.log(this.car);
    });
  }

  async doBooking()
  {
    const nDays = (this.booking.bookEndDate!.getMonth() - this.booking.bookStartDate!.getMonth())*30 +  this.booking.bookEndDate!.getDate() - this.booking.bookStartDate!.getDate() +1;

    this.amount = this.car.rentPrice!*nDays;
    console.log(this.amount);
    this.booking.total = this.amount;
    console.log(this.booking);
    this.bookingService.doBooking(this.booking).subscribe();
  }

}
