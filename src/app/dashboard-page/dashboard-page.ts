import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { CartDisplay } from "../cart-display/cart-display";

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard, CartDisplay],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  protected books = signal<Book[]>([]);
  protected cart = signal<Book[]>([]);

  foo = signal(5);

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

  addToCart(book: Book) {
    this.cart.update(currentCart => {
      // Achtung: Immutability
      return [book, ...currentCart];
    });
  }
}