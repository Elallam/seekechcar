import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { loadFrame } from '@okta/okta-auth-js';
import { User } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn!: boolean;
  public user!: SocialUser;
  constructor(private authService: SocialAuthService) { }

  public setRoles(roles: string){
    localStorage.setItem("roles", roles);
  }

  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken", jwtToken);
  }

  public setUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser()
  {
    return JSON.parse(localStorage.getItem('user')!);
  }

  public getRoles(): string{
    return localStorage.getItem('roles')!;
  }

  public getToken(): string{
    return localStorage.getItem('jwtToken')!;
  }

  public isLoggedIn(): boolean{
    return ((this.getRoles() != null) && (this.getToken() != null));
  }

  public clear(){
    localStorage.clear();
  }

  public login(){
    this.authService.authState.subscribe(
      (user) => {
        this.user = user;
        this.loggedIn = (user != null);
      }
      );
  }
}
