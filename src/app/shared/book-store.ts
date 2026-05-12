import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
// @Service() // ab Angular 22.0
export class BookStore {
  getBooks(): Book[] {
    return [
      {
        isbn: '34342',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        authors: ['FM'],
        rating: 5,
        price: 39.9
      },
      {
        isbn: '433333',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        authors: ['FD'],
        rating: 3,
        price: 32.9
      },
    ];

  }
}
