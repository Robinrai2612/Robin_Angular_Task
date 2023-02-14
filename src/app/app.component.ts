import { Component, Input } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { DateserviceService } from './dateservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count: number = 0;

  updateFromChild($event: number) {
    this.count = $event;
  }
  message: string = '';

  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
  name: string = ' ';
  today: any;
  Books: Book[] = [];
  @Input()
  myInputMessage: string = 'From Parent';
  GetChildData(data: string) {
    console.log(data);
  }

  constructor(
    private dateService: DateserviceService,
    private bookService: BookService
  ) {}
  ngOnInit() {
    this.today = this.dateService.getTodayDate();
    this.Books = this.bookService.getAllBooks();
  }
  title: string = '';
  color = 'red';
}
