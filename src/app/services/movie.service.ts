import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Answer, Gallery, Item } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl =
    'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Item[]> {
    return this.http.get<Answer>(this.apiUrl).pipe(
      map((ans) => {
        return ans.data.category.frontPage;
      })
    );
  }

  getData(): Observable<Gallery[]> {
    return this.getAllCategories().pipe(
      map((el) => {
        return el.map((e) => {
          const urls: string[] = e.data.reduce((acc: string[], data) => {
            return [
              ...acc,
              ...data.verticalPhotos.map((vp) => vp.photoUrlBase),
            ];
          }, []);
          return {
            data: urls,
            header: e.header,
          };
        });
      })
    );
  }
}
