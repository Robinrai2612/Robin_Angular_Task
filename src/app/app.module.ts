import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { HighlightsDirective } from './highlights.directive';
import { ButtonDirective } from './button.directive';
import { AppRoutingModule } from './app-routing.module';
import { SqrPipe } from './sqr.pipe';
import { SalutationPipe } from './salutation.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { DateserviceService } from './dateservice.service';
import { ChildComponent } from './child/child.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ButtonComponent } from './button/button.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    BookstoreComponent,
    HighlightsDirective,
    ButtonDirective,
    SqrPipe,
    SalutationPipe,
    RegistrationComponent,
    ChildComponent,
    CoursesListComponent,
    ButtonComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [DateserviceService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
