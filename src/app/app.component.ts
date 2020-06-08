import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'SMDB';
  // private apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&page=1'
  // data: any = {};

  constructor(private http: HttpClient) {
  }
}
