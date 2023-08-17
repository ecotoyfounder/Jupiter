import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FilmsGalleryComponent } from './components/films-gallery/films-gallery.component';
import { ScrollButtonComponent } from './icons/scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MovieCardComponent,
    FilmsGalleryComponent,
    ScrollButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
