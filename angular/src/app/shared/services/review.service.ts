import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = "http://localhost:8080/review"
  constructor(private httpClient: HttpClient) { }

  getReviewsByCarId(carId: number): Observable<Review[]>{
    return this.httpClient.get<Review[]>(this.baseUrl+"/" + carId);
  }

  addReview(review: Review){
    let header =  new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*', "No-Auth": "false"});
    return this.httpClient.post<Review>(
      this.baseUrl+"/add", 
      review,
      {headers: header});
  }
}
