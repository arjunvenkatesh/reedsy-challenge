import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookDetailsComponent } from './book-details.component';
import { BooksService } from '../books.service';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BookDetailsComponent],
      providers: [BooksService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to upvote and revert it', () => {
    component.book = {
      title: "In Search of Lost Time",
      upvoted: false,
    };

    component.upvote();
    expect(component.book.upvoted).toEqual(true);

    component.upvote();
    expect(component.book.upvoted).toEqual(false);
  });

  it('should be able to comment', () => {
    component.comments = [
      { user: "User1", content: 'content1' },
      { user: "User2", content: 'content2' },
      { user: "User3", content: 'content3' }
    ];

    component.user = "John Doe";
    component.comment = "Sample comment";

    component.submitComment();

    let length = component.comments.length;
    expect(component.comments[length - 1].user).toEqual("John Doe");
    expect(component.comments[length - 1].content).toEqual("Sample comment");
  });

});
