import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { CartDisplay } from "../cart-display/cart-display";
import { BookStore } from '../shared/book-store';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard, CartDisplay],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  protected books = signal<Book[]>([]);
  protected cart = signal<Book[]>([]);

  #store = inject(BookStore);

  constructor() {
    this.books.set(this.#store.getBooks());
  }

  addToCart(book: Book) {
    this.cart.update(currentCart => {
      // Achtung: Immutability
      return [book, ...currentCart];
    });
  }
}