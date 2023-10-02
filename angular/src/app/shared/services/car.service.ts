import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car, Wishlist } from './model/model';
import { Observable, map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private baseUrl = "http://localhost:8080/car";

  constructor(private httpClient : HttpClient) { }



  getCarList(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.baseUrl);
  }

  getCarListPaginate(thePage: number, thePageSize : number, ): Observable<GetResponse>{
    const url = "http://localhost:8080/api/cars?page=" + thePage + "&size=" + thePageSize;
    console.log(url);
    return this.httpClient.get<GetResponse>(url);
  }

  



  getCarBy(name:string, model:string, minPrice:number, maxPrice:number):Observable<Car[]>{

    let min : number = (minPrice == null) ? 0 : minPrice;
    let max : number = (minPrice == null) ? 100000 : maxPrice;
    
    if((name == null || name.length == 0) && (model == null || model.length == 0 )){
      console.log("name and model");
      return this.httpClient.get<Car[]>(this.baseUrl+"/searchBy/"  + min + "/" + max);
    }
    else if(name == null || name.length == 0)
    {
      console.log("/ name");
      return this.httpClient.get<Car[]>(this.baseUrl+"/searchByModel/" +model +"/" + min + "/" + max);
    }
    else if(model == null || model.length == 0 )
    {
      console.log("without model");
      return this.httpClient.get<Car[]>(this.baseUrl+"/searchByName/" + name + "/" + min + "/" + max);
    }
    else{
      console.log("all");
      return this.httpClient.get<Car[]>(this.baseUrl+"/searchBy/" + name + "/" +model +"/" + min + "/" + max);
    }
  }

  updateCar(car: Car) {
    return this.httpClient.put(`${this.baseUrl}`, car);
  }

  getCar(licenceNumber: number) {
    return this.httpClient.get<Car>(this.baseUrl+"/registration/" + licenceNumber);
  }

  addCar(car: Car){
    console.log(car);
    console.log("add a car With car name : " + car.name);
    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.httpClient.post<Car>(
      this.baseUrl, 
      car, 
      {headers: headers});
  }

  findByKeyword(keyword: string): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.baseUrl+"/searchByKeyWord/"+keyword)
  }

  addToFav(wishlist: Wishlist){
    let header =  new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*', "No-Auth": "true"});
    console.log(wishlist);
    return this.httpClient.post(this.baseUrl+"/addToFav", {
      'userId':  wishlist.userId,
      'carId': wishlist.carId,
    }, {headers: header});
  }

}


interface GetResponse{
  _embedded: {
    cars : Car[];
  },
  page: {
    size  : number,
    totalElements : number,
    totalPages: number,
    number : number
  }
}
