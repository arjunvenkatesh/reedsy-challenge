import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { BooksService } from './books.service';

describe('BooksService', () => {
	let service: BooksService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [BooksService]
		});

		service = TestBed.get(BooksService);
		httpMock = TestBed.get(HttpTestingController);
	});


	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have getBooks function', () => {
		expect(service.getBooks).toBeTruthy();
	});

	it('should have getBookDetails function', () => {
		expect(service.getBookDetails).toBeTruthy();
	});

	describe('allBooks', () => {
		it('retrieve all books from the API via GET', () => {
			const BooksResponse: Array<object> = [
				{
					author: "Marcel Proust",
					cover: "http://localhost:3000/images/01.jpg",
					rating: "9.9",
					slug: "in-search-of-lost-time",
					synopsis: "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.↵In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
					title: "In Search of Lost Time",
					upvoted: false,
					upvotes: 1111
				},
				{
					author: "Miguel de Cervantes",
					cover: "http://Arjuns-MacBook-Air.local:3000/images/02.jpg",
					rating: "9.8",
					slug: "don-quixote",
					synopsis: "Don Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.↵Don Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.",
					title: "Don Quixote",
					upvoted: true,
					upvotes: 1022,
				}
			];
			service.getBooks().subscribe(books => {
				expect(books).toEqual(BooksResponse);
			});
			const request = httpMock.expectOne(`http://localhost:3000/books`);
			expect(request.request.method).toBe('GET');
			request.flush(BooksResponse);
		});
	});

	describe('singleBook', () => {
		it('retrieve single book from the API via GET', () => {
			const BookResponse =
			{
				author: "Marcel Proust",
				cover: "http://localhost:3000/images/01.jpg",
				rating: "9.9",
				slug: "in-search-of-lost-time",
				synopsis: "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.↵In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
				title: "In Search of Lost Time",
				upvoted: false,
				upvotes: 1111
			}

			service.getBookDetails('in-search-of-lost-time').subscribe(book => {
				expect(book).toEqual(BookResponse);
			});
			const request = httpMock.expectOne(`http://localhost:3000/books/in-search-of-lost-time`);
			expect(request.request.method).toBe('GET');
			request.flush(BookResponse);
		});
	});

});
