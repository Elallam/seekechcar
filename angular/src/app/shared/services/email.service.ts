import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = "http://localhost:8080/api/v1/email";
  constructor(private httpClient: HttpClient) { }

  sendMail(email: string): Observable<any>{
    let comment: Comment = new Comment();
    comment.email! = email;
     return this.httpClient.post(this.baseUrl, comment);
  }
  sendEMail(nom: string, tele: string, email: string, comment: string){
    console.log('this method is called');
    let comments: Comment = new Comment();
    comments.email! = email;
    comments.nom! = nom;
    comments.tele! = tele;
    comments.comment! = comment;

    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.httpClient.post(this.baseUrl, comments , {headers: headers}
    );
  }
}