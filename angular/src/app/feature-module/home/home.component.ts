import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Booking, Car, carTypes, popularCars1, popularCars2, popularCars3, popularCars4, popularCars5, popularCars6, recommendedCar, testimonial } from 'src/app/shared/services/model/model';
import { CarService } from 'src/app/shared/services/car.service';
import { Routes } from '@angular/router';
import { ListingDetailsComponent } from '../listings/listing-details/listing-details.component';
import { ListingGridComponent } from '../listings/listing-grid/listing-grid.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { combineLatest } from 'rxjs';
import { RegisterComponent } from '../authentication/register/register.component';
import { LoginComponent } from '../authentication/login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../authentication/reset-password/reset-password.component';
import { BookingPaymentComponent } from '../booking/booking-payment/booking-payment.component';
import { BookingListComponent } from '../booking/booking-list/booking-list.component';
import { InvoiceDetailsComponent } from '../booking/invoice-details/invoice-details.component';
import { Error404Component } from '../error/error404/error404.component';
import { Error500Component } from '../error/error500/error500.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { BookingServiceService } from 'src/app/shared/services/booking-service.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  public routes: Routes = [
    {path: '/listings/listing-details/:licenceNumber', component : ListingDetailsComponent},
    {path: '/listings/listing-grid', component : ListingGridComponent},
    {path: '/pages/about-us' , component: AboutUsComponent},
    {path: '/authentication/register', component: RegisterComponent},
    {path: '/authentication/login', component: LoginComponent},
    {path: '/authentication/forgot-password', component: ForgotPasswordComponent},
    {path: '/authentication/reset-password', component: ResetPasswordComponent},
    {path: '/booking/booking-payment', component: BookingPaymentComponent},
    {path : '/booking/booking-list/:startDate/:endDate', component: BookingListComponent}, 
    {path: '/booking/invoice-details', component: InvoiceDetailsComponent}, 
    {path: '/error/error404', component: Error404Component}, 
    {path: '/error/error500', component: Error500Component}, 
    {path: '/pages/pricing', component: PricingComponent}, 
    {path: '/pages/faq', component: FaqComponent},
    {path: '/pages/gallery', component: GalleryComponent}
  ]

  public popularCars1: popularCars1[] = [];
  public popularCars2: popularCars2[] = [];
  public popularCars3: popularCars3[] = [];
  public popularCars4: popularCars4[] = [];
  public popularCars5: popularCars5[] = [];
  public popularCars6: popularCars6[] = [];
  public recommendedCar: recommendedCar[] = [];
  public testimonial: testimonial[] = [];
  public carTypes :carTypes[] = [];

  public cartCategories: string[] = [
    "Kia",
    "Dacia",
    "Renault",
    "Citroën",
    "Fiat",
    "Jeep",
    "Volkswagen",
    "Hundai",
    "Land Rover",
    "Mercedess",
    "Porsche",
    "Audi",
    "Range Rover",
    "Peugeot",
  ];

  public cars : Car[] = [];

  public bookings : Booking[] = [];
  public selected: string = "";

  counter = Array;
  public category: FormControl = new FormControl();
  public name: FormControl=new FormControl();
  public minPrice: FormControl=new FormControl();
  public maxPrice: FormControl = new FormControl();
  thePageSize: number = 6;
  theTotalElement: number = 0;
  thePage: number = 0;
  constructor(private data: DataService, private carService: CarService) {
    this.popularCars1 = this.data.popularCars1;
    this.popularCars2 = this.data.popularCars2;
    this.popularCars3 = this.data.popularCars3;
    this.popularCars4 = this.data.popularCars4;
    this.popularCars5 = this.data.popularCars5;
    this.popularCars6 = this.data.popularCars6;
    this.recommendedCar = this.data.recommendedCar;
    this.testimonial = this.data.testimonial;
    this.carTypes = this.data.carTypes;
  }
  ngOnInit(): void {
    this.listCars();
  }
  
  listCars() {
    this.carService.getCarListPaginate(this.thePage, this.thePageSize).subscribe(
      data => {
        data._embedded.cars.forEach(car => {
          this.cars.push(car);
        });
        this.thePage = this.thePage+1;
        this.theTotalElement = data.page.totalElements;
        console.log(this.cars.length + " " + this.theTotalElement);
      }
    )
  }

  seekCars(){
    
  }

  changeCarList(category: string){
    this.carService.getCarBy('',category, 0, 1000).subscribe(
      data => {
        this.cars = data;
      }
    );
  }

  getCars(){
    let seelCars: Car[] = [];
    // loop over bookings to get carId
    this.carService.getCarBy(this.name.value,this.selected, this.minPrice.value, this.maxPrice.value).subscribe(
      data => {
        this.cars = data;
        console.log(this.cars.length + " ");
      }
    )
  }

  recommendedCarOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  testimonialOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  carTypesOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  };

  carCategoriesOptions: OwlOptions = {
    loop: true,
    margin: 15,
    stagePadding : 1,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  };


}
