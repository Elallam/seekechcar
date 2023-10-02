import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/shared/services/car.service';
import { Car } from 'src/app/shared/services/model/model';

@Component({
  selector: 'app-adminstration-add',
  templateUrl: './adminstration-add.component.html',
  styleUrls: ['./adminstration-add.component.css']
})
export class AdminstrationAddComponent implements OnInit{
  
  car = new Car("car name", "model", "licence number", 0, true, 0, "", 0, "fuel type", "rating", "transmission");
  fuelType = ["Diesel", "Gasoline", "Ethanol", "Bio-Diesel"];
  transmission = ["Manual", "Automatic", "Semi-automatic", "CVT"];
  carForm = new FormGroup({
    carName: new FormControl(''),
    model: new FormControl(''),
  });
  submitted = false;

  constructor(private carService : CarService, private httpClient: HttpClient){}
  
  ngOnInit(): void {
    
  }

  
  onSubmit(){
    this.submitted = true;
    console.log("test");
    // Todo : getting the car value from inputs then call the car service to  add the car using post request 
    this.carService.addCar(this.car);
  }
}
