import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  protected books = signal<Book[]>([]);

  constructor() {
    this.books.set([
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
    ]);
  }
}