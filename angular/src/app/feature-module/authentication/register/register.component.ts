import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/model/model';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public routes = routes;
  public CustomControler!: string | number;
  public isValidConfirmPassword = false;
  public show_password = true;
  public userExist: boolean = false;
  form = new FormGroup({
    email: new FormControl('admin@dreamguys.in', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
    phoneNumber : new FormControl('(+212) 6 ', [Validators.required]),
    address : new FormControl('Address', [Validators.required]),
    firstName : new FormControl('nom', [Validators.required]),
    lastName : new FormControl('prenom', [Validators.required]),
    
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: UserService, private router: Router) {}

  signup() {
    if (this.form.valid) {
      console.log("we are in signup")
      const user: User = new User();
      user.login= this.form.value.email!;
      user.password = this.form.value.password!;
      user.phoneNumber = this.form.value.phoneNumber!;
      user.firstName = this.form.value.firstName!;
      user.lastName = this.form.value.lastName!;
      user.address = this.form.value.address!;
      this.auth.register(user).subscribe(
        (response : any) => {
          if(response.user === null){
            this.userExist= true;
          }
          else{
           this.router.navigate(['/home']);
          }
        }
      );
    }
  }
  togglePassword() {
    this.show_password = !this.show_password;
  }
}
