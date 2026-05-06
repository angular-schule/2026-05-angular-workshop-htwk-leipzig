import { Component, computed, input } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-display',
  imports: [CurrencyPipe],
  templateUrl: './cart-display.html',
  styleUrl: './cart-display.scss',
})
export class CartDisplay {
  readonly books = input.required<Book[]>();

  // Gesamtpreis des Warenkorbs:
  // bei Änderungen an `this.books` wird Wert von Computed Signal neu berechnet
  protected readonly totalValue = computed(() => this.books().reduce((acc, book) => acc + book.price, 0));
}
