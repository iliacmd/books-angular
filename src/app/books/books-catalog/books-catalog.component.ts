import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.scss']
})
export class BooksCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
