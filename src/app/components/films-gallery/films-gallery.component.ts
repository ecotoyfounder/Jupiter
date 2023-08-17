import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gallery } from '../../interfaces/interfaces';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-films-gallery',
  templateUrl: './films-gallery.component.html',
  styleUrls: ['./films-gallery.component.scss'],
})
export class FilmsGalleryComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('filmsList') filmsList:
    | {
        nativeElement: {
          scrollLeft: number;
          scrollTo: (arg0: { left: number }) => void;
          addEventListener: (arg0: string, arg1: () => void) => void;
          removeAllListeners: () => void;
          scrollWidth: number;
          clientWidth: number;
        };
      }
    | undefined;

  gallery: Gallery[] = [];
  scrollPosition = new BehaviorSubject(0);
  leftVisible = new BehaviorSubject(false);
  rightVisible = new BehaviorSubject(true);

  constructor(private http: HttpClient, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getData().subscribe((g) => {
      this.gallery = g;
    });

    this.scrollPosition.next(this.filmsList?.nativeElement.scrollLeft || 0);
    this.filmsList?.nativeElement.scrollTo({
      left: this.scrollPosition.value,
    });
  }

  ngAfterViewInit(): void {
    this.filmsList?.nativeElement.addEventListener('scroll', () => {
      this.filmsList?.nativeElement.scrollLeft &&
        this.setVisibility(this.filmsList.nativeElement.scrollLeft);
    });
  }

  ngOnDestroy(): void {
    this.filmsList?.nativeElement.removeAllListeners();
  }

  onScroll(scrollPos: number): void {
    this.setVisibility(scrollPos);
  }

  private setVisibility(scrollPos: number): void {
    this.leftVisible.next(scrollPos > 0);
    this.filmsList &&
      this.rightVisible.next(
        scrollPos <
          this.filmsList.nativeElement.scrollWidth -
            this.filmsList.nativeElement.clientWidth
      );
  }
}
