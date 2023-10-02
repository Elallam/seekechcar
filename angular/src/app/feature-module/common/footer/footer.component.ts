import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  public email: FormControl = new FormControl();

  constructor(private emailService: EmailService){}
  
  ngOnInit(): void {
    
  }
  public routes = routes;

  sendMail(){
    console.log('sending email');
    this.emailService.sendMail(this.email.value).subscribe();
  }
}
