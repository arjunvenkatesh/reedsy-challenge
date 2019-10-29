import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: any;
  bookId: string;
  comments: Array<any> = [];
  comment: string;
  user: string = "John Doe";

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap) => {
      this.bookId = paramMap.get('id');
      this.getBookDetails(this.bookId);
    });
  }

  getBookDetails(bookId: string) {
    this.booksService.getBookDetails(bookId)
      .subscribe((response) => {
        this.book = response;
        console.log(this.book);
      },
        (error) => { },
        () => { }
      );
  }

  getBookCover(coverURL: string) {
    let str = coverURL.match(/\/\/(.*):/).pop();
    let final =(coverURL.replace(str, 'localhost'));
    return final;
  }

  upvote() {
    this.book.upvoted = !this.book.upvoted;
  }

  submitComment() {
    let comment = {
      user: this.user,
      content: this.comment
    };

    this.comments.push(comment);
    this.comment = '';
  }

  onSubmit() {
    console.log('onSubmit');
  }

}
