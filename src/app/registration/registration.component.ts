import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 handleSubmit (f:any){
  console.log(f.value)
  f.reset()
 }
  }

