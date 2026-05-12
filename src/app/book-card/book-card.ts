import { Component, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book-card',
  imports: [CurrencyPipe],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  // Input: hier fließen von der Elternkomponente hinein
  // von oben nach unten
  readonly book = input.required<Book>();

  // Output: hier fließen an die Elternkomponente hinaus
  // von unten nach oben
  readonly cartAdd = output<Book>();

  addToCart() {
    this.cartAdd.emit(this.book());
  }
}
