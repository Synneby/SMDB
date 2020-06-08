import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    private apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&page=1'
  data: any = [];
  results: any = [];
  searchQuery;

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get(this.apiURL).subscribe(data => {
        // data is now an instance of type ItemsResponse, so you can do this:
        // this.results = data.results;
      });
    }

  getMovies(){
    this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&page=1')
    .subscribe(data =>{
    console.log(data);
    console.log([data])
  
    const mapped = Object.keys(data).map(key=>({type: key, value: data[key]}));
    console.log(mapped[3].value)
    this.data = mapped[3].value;
    
    console.log(data)
    console.log(this.results)
    return this.data
    // this.movies = Object.keys(data);  
    });
    
  }

}




