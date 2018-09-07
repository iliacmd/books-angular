import {Author} from './author';

export interface Book {
  id: Number,
  title: String,
  year: String,
  authors: Array<Author>;
}
