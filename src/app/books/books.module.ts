import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from './book.service';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksCatalogComponent} from './books-catalog/books-catalog.component';
import {BooksDetailsComponent} from './books-details/books-details.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [BooksListComponent, BooksCatalogComponent, BooksDetailsComponent],
  providers: [BookService]
})
export class BooksModule {
}
