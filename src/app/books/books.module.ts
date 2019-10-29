import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books.routes';
import { NgxPaginationModule } from 'ngx-pagination';

import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BooksService } from './books.service';

@NgModule({
  declarations: [BooksListComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule,
    NgxPaginationModule
  ],
  providers: [
  	BooksService
  ]
})
export class BooksModule { }
