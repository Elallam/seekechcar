import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { ListingDetailsComponent } from '../listings/listing-details/listing-details.component';
import { ListingGridComponent } from '../listings/listing-grid/listing-grid.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BookingPaymentComponent } from '../booking/booking-payment/booking-payment.component';
import { BookingListComponent } from '../booking/booking-list/booking-list.component';
import { InvoiceDetailsComponent } from '../booking/invoice-details/invoice-details.component';
import { Error404Component } from '../error/error404/error404.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { Error500Component } from '../error/error500/error500.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { FaqComponent } from '../pages/faq/faq.component';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  public routes: Routes = [
    {path: '/listings/listing-details/:licenceNumber', component : ListingDetailsComponent},
    {path: '/listings/listing-grid', component : ListingGridComponent},
    {path: '/pages/about-us' , component: AboutUsComponent},
    {path: '/authentication/register', component: RegisterComponent},
    {path: '/authentication/login', component: LoginComponent},
    {path: '/authentication/forgot-password', component: ForgotPasswordComponent},
    {path: '/authentication/reset-password', component: ResetPasswordComponent},
    {path: '/booking/booking-payment', component: BookingPaymentComponent},
    {path : '/booking/booking-list/:licenceNumber/:startDate/:endDate/:pickUp/:dropOff/:userName/:phone', component: BookingListComponent}, 
    {path: '/booking/invoice-details', component: InvoiceDetailsComponent}, 
    {path: '/error/error404', component: Error404Component}, 
    {path: '/error/error500', component: Error500Component}, 
    {path: '/pages/pricing', component: PricingComponent}, 
    {path: '/pages/faq', component: FaqComponent},
    {path: '/pages/gallery', component: GalleryComponent}
  ];
}