import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {

	books: Array<any>;
  filteredBooks: Array<any> = [];
	meta: any;
  itemsPerPage: number = 5;
  currentPage: number = 1;

  constructor(
  	private booksService: BooksService
  ) { }

  ngOnInit() {
  	this.getBooks();
  }

  getBooks() {
  	this.booksService.getBooks()
      .subscribe((response) => {
        this.books = response.books;
        this.filteredBooks = this.books;
        this.meta = response.meta;
        console.log(this.books);
      },
        (error) => {},
        () => {}
      );
  }

  getBookCover(coverURL: string) {
    let str = coverURL.match(/\/\/(.*):/).pop();
    let final =(coverURL.replace(str, 'localhost'));
    return final;
  }

  upvote(index: number) {
    this.books[index].upvoted = !this.books[index].upvoted;
  }

  search(e) {
    console.log(e.target.value);
    console.log(this.books);
    let searchTerm = e.target.value;

    this.filteredBooks = this.books.filter(book => {
      return (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.synopsis.toLowerCase().includes(searchTerm.toLowerCase()));
    });
  }

}
