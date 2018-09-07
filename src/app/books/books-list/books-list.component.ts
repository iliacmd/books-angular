import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((result) => {
        this.books = result;
      }, (error) => {
        console.error(error);
      });
  }

}
