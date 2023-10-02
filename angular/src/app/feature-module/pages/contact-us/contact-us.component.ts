import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { EmailService } from 'src/app/shared/services/email.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public nom: FormControl = new FormControl();
  public email: FormControl = new FormControl();
  public tele: FormControl = new FormControl();
  public comment: FormControl = new FormControl();

  constructor(private emailService: EmailService){
    
  }

  ngOnInit(): void {
    
  }
  public routes = routes;

  sendMail(){
    this.emailService.sendEMail(this.nom.value, this.tele.value, this.email.value, this.comment.value).subscribe();
  }



}
