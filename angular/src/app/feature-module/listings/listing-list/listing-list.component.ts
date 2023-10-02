import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { Booking, Car } from 'src/app/shared/services/model/model';
import { CarService } from 'src/app/shared/services/car.service';
import { Routes } from '@angular/router';
import { ListingDetailsComponent } from '../listing-details/listing-details.component';
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
import { BookingServiceService } from 'src/app/shared/services/booking-service.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

interface data {
  value: string ;
}
@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent implements OnInit{
  

  public cars: Car[] = [];
  public tcars: Car[] = [];
  public bookings: Booking[] = [];

  public isFilter : boolean = false;


  //
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
  ];
  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
  ];
  selectedList2: data[] = [
    { value: 'De Bas en Haut' },
    { value: 'De Haut en Bas' },
  ];


  minchanged : boolean = false;
  maxchanged : boolean = false;
  public selectedValue1 : string = this.selectedList1[0].value;
  public selectedValue2 !: string;

  public minvalue : FormControl = new FormControl('20');
  public maxvalue: FormControl = new FormControl('80');
  filter = {
    keyword: "",
    type: "",
    category: "",
    price : 0,
    capacity: 0,
    rating: 0
  }
  //

  public cartCategories = [
      {name : "Kia" , checked: false,},
      {name  : "Dacia", checked:  false,},
      {name : "Renault", checked : false,},
      {name  : "Citroën", checked : false,},
      {name  :"Fiat", checked : false,},
      {name  :"Jeep", checked : false,},
      {name  :"Volkswagen", checked : false,},
      {name  :"Hundai", checked : false,},
      {name  :"Land Rover", checked : false,},
      {name  :"Mercedess", checked : false,},
      {name  :"Porsche", checked : false,},
      {name  :"Audi", checked : false,},
      {name  : "Range Rover", checked : false,},
      {name  : "Peugeot", checked : false,},
  ];

  public seats = [
    {name : "4" , checked: false,},
    {name  : "5", checked:  false,},
    {name : "6", checked : false,},
    {name  : "7", checked : false,},
];

public checkedSeat: string[] =  [];


  //Pagination


  thePageNumber : number = 1;
  thePageSize: number = +this.selectedValue1;
  theTotalElement : number = this.cars.length;
  public paginate: string[] = [];

  public categories: string[] =[] ;

  public keyword: FormControl = new FormControl();

  constructor(private carService: CarService){};
  ngOnInit(): void {
    this.listCars();
  }


  listCars() {
    this.carService.getCarListPaginate(this.thePageNumber -1, this.thePageSize).subscribe(
      data => {
        this.cars = data._embedded.cars;
        this.thePageNumber = data.page.number +1;
        this.thePageSize = data.page.size;
        this.theTotalElement = data.page.totalElements;
        for (let i = 1; i<= this.theTotalElement/+this.selectedValue1 + 1; i++) {
          this.paginate[i-1] = ""+i;
        }
      }
    )
  }


  changeValue1(){
    this.paginate = [];
    this.thePageNumber = 1;
    for (let i = 1; i<= Math.round(this.theTotalElement/+this.selectedValue1); i++) {
      this.paginate[i-1] = ""+i;
    }
    console.log(this.paginate.length);
    this.thePageSize = +this.selectedValue1;
    this.carService.getCarListPaginate(this.thePageNumber -1, this.thePageSize).subscribe(
      data => {
        this.cars = data._embedded.cars;
        this.thePageNumber = data.page.number +1;
        this.thePageSize = data.page.size;
        this.theTotalElement = data.page.totalElements;
        for (let i = 1; i<= Math.round(this.theTotalElement/+this.selectedValue1)+1 ; i++) {
          this.paginate[i-1] = ""+i;
        }
      }
    )
  }

  check(cat : any){
    console.log(cat);
    cat.checked = !cat.checked;
    if(cat.checked){
      this.categories.push(cat.name);
    }
    else{
      let temp_cat: string[] = [];
      this.categories.forEach((e) => {
        if(e != cat.name){
          temp_cat.push(e);
        }
        this.categories = temp_cat;
      });
    }
    console.log(this.categories); 
  }

  checkSeat(seat : any){
    console.log(seat);
    seat.checked = !seat.checked;
    if(seat.checked){
      this.checkedSeat.push(seat.name);
    }
    else{
      let temp_cat: string[] = [];
      this.checkedSeat.forEach((e) => {
        if(e != seat.name){
          temp_cat.push(e);
        }
        this.checkedSeat = temp_cat;
      });
    }
    console.log(this.checkedSeat);
  }

  previous(){
    if(this.thePageNumber > 1) this.thePageNumber--; 
    this.paginate = [];
    this.carService.getCarListPaginate(this.thePageNumber -1, this.thePageSize).subscribe(
      data => {
        this.cars = data._embedded.cars;
        this.thePageNumber = data.page.number +1;
        this.thePageSize = data.page.size;
        this.theTotalElement = data.page.totalElements;
        for (let i = 1; i<= Math.round(this.theTotalElement/+this.selectedValue1) +1; i++) {
          this.paginate[i-1] = ""+i;
        }
        
    });
  }

  next()
  {
    this.paginate = [];
    if(this.thePageNumber <= Math.round(this.theTotalElement/+this.selectedValue1)) this.thePageNumber++; 
    this.carService.getCarListPaginate(this.thePageNumber -1, this.thePageSize).subscribe(
      data => {
        this.cars = data._embedded.cars;
        this.thePageNumber = data.page.number +1;
        this.thePageSize = data.page.size;
        this.theTotalElement = data.page.totalElements;
        for (let i = 1; i<= Math.round(this.theTotalElement/+this.selectedValue1) +1 ; i++) {
          this.paginate[i-1] = ""+i;
        }
      }
    )
  }

  goTo(item: string){
    this.paginate = [];
    console.log("test");
    console.log("The page number " + this.thePageNumber);
    this.thePageNumber = +item;
    this.carService.getCarListPaginate(this.thePageNumber -1, this.thePageSize).subscribe(
      data => {
        this.cars = data._embedded.cars;
        this.thePageNumber = data.page.number +1;
        this.thePageSize = data.page.size;
        this.theTotalElement = data.page.totalElements;
        for (let i = 1; i<= Math.round(this.theTotalElement/+this.selectedValue1) +1; i++) {
          this.paginate[i-1] = ""+i;
        }
      }
    )
    window.scroll(0,0);
  }

  changeMinPrice(){
    this.minchanged = true;
    if(this.minvalue.value > this.maxvalue.value){
      this.maxvalue.setValue(this.minvalue.value);
    }
  }

  changeMaxPrice(){
    this.maxchanged = true;
    if(this.minvalue.value > this.maxvalue.value){
      this.minvalue.setValue(this.maxvalue.value);
    }
  }

  filtrer(){
    this.isFilter = true;
    this.tcars = [];
    this.filter.keyword = this.keyword.value;
    this.carService.getCarList().subscribe(
      data => {
        this.cars = data;
        if(this.filter.keyword != "" || this.filter.keyword != null){
          this.cars.forEach((car)=>{
            if(car.name?.toLowerCase().includes(this.filter.keyword) || car.model?.toLocaleLowerCase().includes(this.filter.keyword)){
              this.tcars.push(car);
              console.log(car);
            }
          });
          this.cars = this.tcars;
        }
        this.tcars.length != 0? this.cars = this.tcars : this.cars = data;
        if(this.categories.length != 0){
          this.tcars = [];
          this.cars.forEach((car)=>{
            let value: string  = car.model!;
            console.log(car.model!);
            if(this.categories.includes(car.model!)){ 
              this.tcars.push(car);
              console.log(car);
            }
          });
          this.cars = this.tcars;
        }
        this.tcars.length != 0? this.cars = this.tcars : this.cars = data;
        if(this.checkedSeat.length != 0){
          this.tcars = [];
          this.cars.forEach((car)=>{
            let value: string  = car.model!;
            
            if(this.checkedSeat.includes(""+car.numberOfPassanger!)){ 
              console.log(car.model!);
              this.tcars.push(car);
            }
          });
          this.cars = this.tcars;
        }
        if(this.minchanged || this.maxchanged){
          this.tcars = [];
          this.cars.forEach((car)=>{
            let value: string  = car.model!;
            if(car.rentPrice! >= this.minvalue.value && car.rentPrice! <= this.maxvalue.value){ 
              this.tcars.push(car);
            }
          });
          this.cars = this.tcars;
        }
        this.tcars.length != 0? this.cars = this.tcars : this.cars = data;
      }
    );
  }

  resetFilter() {
    this.isFilter = false;
    this.listCars();
    this.keyword.setValue('');
    this.cartCategories.forEach((e)=>{
      e.checked = false;
    })
    this.seats.forEach((e)=>{
      e.checked = false;
    })
  }

selectedCar?: Car;
onSelect(car: Car): void {
  this.selectedCar = car;
}
}
