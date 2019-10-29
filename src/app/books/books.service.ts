import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {

	baseURL: string = "http://localhost:3000";

	constructor(
		private http: HttpClient
	) { }

	getBooks(): Observable<any> {
		return this.http.get(`${this.baseURL}/books`);
	}

	getBookDetails(slug: string): Observable<any> {
		return this.http.get(`${this.baseURL}/books/${slug}`);
	}

}

