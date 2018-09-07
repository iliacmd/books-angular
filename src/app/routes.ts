import {BooksCatalogComponent} from './books/books-catalog/books-catalog.component';
import {BooksDetailsComponent} from './books/books-details/books-details.component';
import {Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'books'},
  {path: 'books', component: BooksCatalogComponent},
  {path: 'books/details/:id', component: BooksDetailsComponent}
];

export default routes;
