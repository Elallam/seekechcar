import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking, User } from './model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  private baseUrl: string = 'http://localhost:8080/booking';

  constructor(private httpClient: HttpClient) { }

  doBooking(booking: Booking){
    console.log(booking);
    console.log("making a booking for carId : " + booking.carId);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('do booking is called');
    return this.httpClient.post<Booking>(
      this.baseUrl, 
      {
        "bookStartDate"  : booking.bookStartDate,
        "bookEndDate" : booking.bookStartDate,
        "carId" : booking.carId,
        "customerId" : 0,
        "customerEmail": booking.customerEmail,
        "userName": booking.userName,
        "userPhone": booking.userPhone,
        "pickLocation" : booking.pickLocation,
        "endLocation": booking.endLocation,
        "total" : booking.total
        }, 
      {headers: headers});

  }


  getBookings(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(this.baseUrl);
  }

  getCustomerBooking(customerId: number){

    return this.httpClient.get<User>(this.baseUrl+"/customer/"+customerId);
  }

  getCarBooking(carId: number){
    console.log(this.baseUrl+ "/car/" + carId)

    return  this.httpClient.get<Booking>(this.baseUrl+ "/car/" + carId);
  }

  deleteBooking(bookingId: number) : Observable<any> { 
    console.log("we are in the Service delete action  " + bookingId);
    return this.httpClient.delete(this.baseUrl+"/"+bookingId);
  }
}
