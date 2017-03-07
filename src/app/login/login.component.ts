import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new Login('', '');
  submitted = false;
  onSubmit() { 
      this.submitted = true;
      console.log(this.model); // print the model
    }
}
