import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  form: FormGroup = this.fb.group({
    from_name:'',
    to_name:'admin',
    from_email:'',
    subject:'',
    message:'',
  }) ;
  constructor(private fb: FormBuilder) {}

  async send(){ 
    emailjs.init ('DqWoEAtlyXfJfVAEc');
    let responce = await emailjs.send("service_21osf4x","template_n8xv6xq",{
     from_name: this.form.value.from_name,
     to_name: this.form.value.to_name,
     from_email:this.form.value.from_email,
     Subject: this.form.value.Subject,
    message: this.form.value.message,
     });
     alert('message has been sent.');
     this.form.reset();
    }
    
}
