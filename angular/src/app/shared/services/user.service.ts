import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest, User } from './model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/v1/auth";
  requestHeader =   new HttpHeaders(
    {"No-Auth": "True", 
  }
  )

  
  constructor(private http: HttpClient) { }

  login(request: AuthenticationRequest){
    return this.http.post(this.baseUrl+"/authenticate", 
    {
      "login" : request.login, 
      "password" : request.password
    },
    {headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*', "No-Auth": "True" })}
    );
  }

  register(user: User){
    return this.http.post(this.baseUrl+"/register", 
    {
      "login" : user.login, 
      "password" : user.password,
      "firstName" : user.firstName,
      "lastName": user.lastName,
      "phoneNumber" : user.phoneNumber
    },
    {headers: this.requestHeader}
    );
  }
}
