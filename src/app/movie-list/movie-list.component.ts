import { Component, OnInit, Inject, Input } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

export interface DialogData {
  title;
  overview;
  poster;
  release;
  genres;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
  baseUrl = 'https://api.themoviedb.org/3/movie/'
  apiKey = 'api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f'
  languages :any = [];
  movies : any = [];
  genres : any = [];
  filter : any[];
  years: any[];
  genreNames :any[] = [];
  year;
  genre;
  selectedYear;
  chosenGenre;
  chosenLanguage;
  selectedProduct;
  searchQuery : any [];
  chosenUrl= 'https://api.themoviedb.org/3/movie/popular?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&page=1';
  clickEventsubscription:Subscription;
  filterForm;

  constructor( 
    private moviesService: MoviesService, 
    private http: HttpClient, 
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    ) {
      this.years = []; 
      for(let i = 0; i < 20; ++i) { 
      this.years.push(2000 + i);
  } 

  this.filterForm = this.formBuilder.group({
    genre: '',
    year: ''
  });
    }


  ngOnInit() {
    this.movies = this.getMovies();
    this.genres = this.getGenres();
    this.languages= this.getLanguages();
  }

  getMovies(){
    this.http.get(this.chosenUrl)
    .subscribe(data => {
  
      console.log("pop")
    const mapped = Object.keys(data).map(key=>({type: key, value: data[key]}));
    this.movies = mapped[3].value;
    // this.movies = Object.keys(data);  
    });
    
  }

  getPopular(){
    this.chosenUrl= 'https://api.themoviedb.org/3/movie/popular?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&page=1'
    this.getMovies();
  }

  getTopRated(){
  this.chosenUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&page=1'
  this.getMovies();
}

getUpcoming(){
  this.chosenUrl='https://api.themoviedb.org/3/movie/now_playing?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&page=1'
  this.getMovies();  
}

  getGenres(){
    this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US')
    .subscribe(data => {
      this.genres = Object.entries(data)[0][1];
          });
          
  }

  getLanguages(){
    this.http.get('https://api.themoviedb.org/3/configuration/languages?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f')
    .subscribe(data => {
      this.languages = Object.entries(data)[0][1];
          });
  }

  onSubmit(genre){
    console.log(this.selectedProduct);
    this.chosenUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&with_genres=' + this.selectedProduct

    this.getMovies()
  }

  onSearch(){
    console.log(this.searchQuery);
    this.chosenUrl = 'https://api.themoviedb.org/3/search/keyword?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&query='+ this.searchQuery + '&page=1'
    this.getMovies()
  }

  onFilter(filters){
    this.year= filters.year
    this.genre = filters.genre
    console.log(this.year)
    console.log("filters")
    console.log(filters.year)
    console.log(this.filterForm)
    this.chosenUrl= 'https://api.themoviedb.org/3/discover/movie?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&with_genres=' + this.genre + '&year=' + this.year
    this.getMovies();
  }

  onQuery(){
    console.log(this.searchQuery)
    this.chosenUrl= 'https://api.themoviedb.org/3/search/movie?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&language=en-US&query='+ this.searchQuery + '&page=1&include_adult=false'
    // this.chosenUrl= 'https://api.themoviedb.org/3/search/keyword?api_key=1dd8a82f899dedf1e8fcac7fcbd4ca8f&query=' + this.searchQuery + '&page=1';
    this.getMovies()
    // return this.searchQuery
  }

  
  openDialog(title, overview, poster, release, genre) {
    console.log(title, overview, poster, release, genre)
    console.log("dialog")
    console.log(this.genres)
    console.log(genre)
    var i;
    this.genreNames= [];

    for (i = 0; i < genre.length; i++){
      console.log(genre[i])
    const found = this.genres.find(x => x.id === genre[i]);
    console.log(found.name)
    this.genreNames.push(found.name)
      }
    console.log(this.genreNames)

    this.dialog.open(DialogDataExampleDialog, {
      panelClass: 'custom-dialog-container',
      
      data: {
        title: title,
        overview: overview,
        poster: poster,
        release: release,
        genres: this.genreNames
      }
    });
  }
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './modal-view.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}