import { Injectable } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  getAllBooks(): Book[] {
    // returns an Array of  types
    return [
      { id: 1, name: 'HTML 5' },
      { id: 2, name: 'CSS 3' },
      { id: 3, name: 'Java Script' },
      { id: 4, name: 'Ajax Programming' },
    ];
  }
}
