import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const bookRoutes: Routes = [
  { path: 'books',  component: BooksListComponent },
  { path: 'books/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(bookRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BooksRoutingModule { }