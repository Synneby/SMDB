import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.scss']
})
export class FilterMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MovieFilter(genre) {
    var genreObj = genre.value;
}

}
