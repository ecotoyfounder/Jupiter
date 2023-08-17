import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsGalleryComponent } from './components/films-gallery/films-gallery.component';
import { ScrollButtonComponent } from './icons/scroll-button/scroll-button.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FilmsGalleryComponent,
    ScrollButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
