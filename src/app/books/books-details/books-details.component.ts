import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBook(1)
      .subscribe((result) => {
        this.book = result;
      });
  }

}
