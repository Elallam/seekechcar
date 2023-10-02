import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormControl } from '@angular/forms';
import { BookingServiceService } from 'src/app/shared/services/booking-service.service';
import { CarService } from 'src/app/shared/services/car.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { Booking, Car, Review, User, Wishlist, interestedCars, listingDetails, thumbnails } from 'src/app/shared/services/model/model';
import { ListingGridComponent } from '../listing-grid/listing-grid.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { RegisterComponent } from '../../authentication/register/register.component';
import { LoginComponent } from '../../authentication/login/login.component';
import { ForgotPasswordComponent } from '../../authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../../authentication/reset-password/reset-password.component';
import { BookingPaymentComponent } from '../../booking/booking-payment/booking-payment.component';
import { BookingListComponent } from '../../booking/booking-list/booking-list.component';
import { InvoiceDetailsComponent } from '../../booking/invoice-details/invoice-details.component';
import { Error404Component } from '../../error/error404/error404.component';
import { Error500Component } from '../../error/error500/error500.component';
import { PricingComponent } from '../../pages/pricing/pricing.component';
import { FaqComponent } from '../../pages/faq/faq.component';
import { GalleryComponent } from '../../pages/gallery/gallery.component';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from 'src/app/shared/services/review.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit{
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
    {path: '/pages/gallery', component: GalleryComponent},
    {path: '**', component: Error404Component  }
  ];
  public listingDetails: listingDetails[] = [];
  public thumbnails: thumbnails[] = [];
  public interestedCars: interestedCars[] = [];
  car !:Car;
  public reviews: Review[] = [];
  public booking!: Booking;
  public owner: any;

  public loggedIn!: boolean;
  public user!: User;

  public images: string[]=[];
  public days = 0;

  todayDate = new Date();
  eDate = new Date();

  public rating: number = 0;

  startDate: FormControl= new FormControl(new Date());
  endDate: FormControl = new FormControl(new Date());

  dropOff: FormControl  = new FormControl();
  pickUp: FormControl  = new FormControl();
  name: FormControl  = new FormControl();
  phoneNumber: FormControl  = new FormControl();

  comment: FormControl = new FormControl();
  userName  :FormControl = new FormControl();
  email: FormControl = new FormControl();

  ratingControl: FormControl = new FormControl(0);

  isLoggedIn?: boolean;
  trustedUrl: any;
  
  constructor(private data: DataService,
     private carService : CarService,
     private bookingService: BookingServiceService,
     private route : ActivatedRoute, 
     private http: HttpClient, router: Router,
     private authService: AuthService,
     private reviewService: ReviewService,
     private _sanitizer: DomSanitizer,
     ) {
    this.listingDetails = this.data.listingDetails;
    this.thumbnails = this.data.thumbnails;
    this.interestedCars = this.data.interestedCars;
    this.owner = this.data.owner;
    // this.trustedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.car.videoUrl!);
    }

  ngOnInit(): void {
    this.data.currentCar.subscribe(
      (data)=>{
        this.car = data;
        this.trustedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.car.videoUrl!);
      });
      this.data.currentBooking.subscribe(
        (data)=>{
          this.booking = data;
        });
    this.route.paramMap.subscribe(
      () => {
        this.handleCarDetails();
      }
    );
    this.user = this.authService.getUser();
    this.isLoggedIn = this.authService.loggedIn;

    // this.getBooking();
    // console.log(this.booking);
  }

  handleCarDetails() {
     // get the licenceNumber and get the specific car
    const licenceNumber: string  = this.route.snapshot.paramMap.get('licenceNumber')!;
     this.carService.getCar(+licenceNumber).subscribe(
      data => {
        this.car = data;
        this.data.changeCar(this.car);
        // console.log(this.car.carId);
        this.reviewService.getReviewsByCarId(this.car.carId!).subscribe(
          data=> {
            this.reviews = data;
            this.reviews.forEach((review) =>{
              review.datePosted = new Date(review.datePosted!);
            });
          }
        )
      }
     )
    }

    changeDate(){
      this.eDate = this.startDate.value;
      this.startDate = new FormControl(this.eDate);
    }


    addReview(){
        const rev = new Review();
        rev.comment = this.comment.value;
        rev.datePosted = new Date();
        rev.userId = this.user.id;
        rev.carId = this.car.carId;
        rev.rating = this.rating;
        rev.userName = this.user.firstName + " " + this.user.lastName;
        console.log(rev);
        this.reviewService.addReview(rev).subscribe();
        this.reviewService.getReviewsByCarId(this.car.carId!).subscribe(
          data=> {
            this.reviews = data;
            this.reviews.forEach((review) =>{
              review.datePosted = new Date(review.datePosted!);
            });
          }
        );
    }

    addToWishList(){
      let wish: Wishlist = new Wishlist();
      wish.userId = this.user.id;
      wish.carId = this.car.carId;
      this.carService.addToFav(wish).subscribe();
    }

    getRating(){
      this.rating = this.ratingControl.value;
    }

    doBooking(){
      const book : Booking = new Booking();
      book.bookStartDate = new Date(this.startDate.value);
      book.bookEndDate  = new Date(this.endDate.value);
      book.pickLocation = this.pickUp.value;
      book.endLocation = this.dropOff.value;
      book.carId = this.car.carId;
      book.customerEmail = this.email.value;
      book.userName = this.userName.value;
      book.userPhone = this.phoneNumber.value;
      this.data.changeBooking(book);
    }

    check(){
      this.days = (this.endDate.value.getMonth() - this.startDate.value.getMonth())*30 + this.endDate.value.getDate() - this.startDate.value.getDate() +1;
    }

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.detail-bigimg',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  interestedCarsOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    loop: true,
    rtl: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
}
