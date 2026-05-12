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
      {
        isbn: '987654',
        title: 'React',
        description: 'Komponenten und Hooks',
        authors: ['JS'],
        rating: 4,
        price: 35.9
      },
      {
        isbn: '123456',
        title: 'Svelte',
        description: 'Compiler-basiertes Framework',
        authors: ['RH'],
        rating: 4,
        price: 29.9
      },
      {
        isbn: '555111',
        title: 'TypeScript',
        description: 'Typsicheres JavaScript',
        authors: ['AH'],
        rating: 5,
        price: 42.9
      },
    ];

  }
}
