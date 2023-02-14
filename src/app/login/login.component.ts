import { Component } from '@angular/core';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login:Login =new Login();
  result:string=""; 
  loginsuccess:boolean = false;
  loginfailed:boolean = false;
  
  validate() {
        if(this.login.id==="innovapptive" &&  this.login.pwd==="innovapptive"){
          this.loginsuccess=true;
          this.loginfailed=false;}
        else{
          this.loginsuccess=false;
          this.loginfailed=true;
 
  }
  }}