import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Book} from './book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.urlBooksApi);
  }

  getBook(id: Number): Observable<Book> {
    return this.http.get<Book>(environment.urlBooksApi + '/' + id);
  }

}
