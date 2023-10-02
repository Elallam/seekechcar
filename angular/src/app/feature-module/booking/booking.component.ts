import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ListingDetailsComponent } from '../listings/listing-details/listing-details.component';
import { ListingGridComponent } from '../listings/listing-grid/listing-grid.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { LoginComponent } from '../authentication/login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../authentication/reset-password/reset-password.component';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { Error404Component } from '../error/error404/error404.component';
import { Error500Component } from '../error/error500/error500.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { DataService } from 'src/app/shared/services/data/data.service';
import { CarService } from 'src/app/shared/services/car.service';
import { BookingServiceService } from 'src/app/shared/services/booking-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  public routes: Routes = [
    {path: '/listings/listing-details/:licenceNumber', component : ListingDetailsComponent},
    {path: '/listings/listing-grid', component : ListingGridComponent},
    {path: '/pages/about-us' , component: AboutUsComponent},
    {path: '/authentication/register', component: RegisterComponent},
    {path: '/authentication/login', component: LoginComponent},
    {path: '/authentication/forgot-password', component: ForgotPasswordComponent},
    {path: '/authentication/reset-password', component: ResetPasswordComponent},
    {path: '/booking/booking-payment', component: BookingPaymentComponent},
    // {path : '/booking/booking-list/:licenceNumber/:startDate/:endDate/:pickUp/:dropOff/:userName/:phone', component: BookingListComponent}, 
    {path : '/booking/booking-list', component: BookingListComponent}, 
    {path: '/booking/invoice-details', component: InvoiceDetailsComponent}, 
    {path: '/error/error404', component: Error404Component}, 
    {path: '/error/error500', component: Error500Component}, 
    {path: '/pages/pricing', component: PricingComponent}, 
    {path: '/pages/faq', component: FaqComponent},
    {path: '/pages/gallery', component: GalleryComponent}
  ];

  constructor(private data: DataService,
    private carService : CarService,
    private bookingService: BookingServiceService,
    private route : ActivatedRoute, 
    private http: HttpClient, router: Router){}
  


}
