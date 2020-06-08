import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FilterMoviesComponent } from './filter-movies/filter-movies.component';
// import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    FilterMoviesComponent,
    // ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule

    
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
