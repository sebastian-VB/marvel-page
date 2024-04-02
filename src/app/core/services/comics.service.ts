import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListComics } from '../../shared/models/comic.interface';
import { enviroment } from '../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  getListComic(): Observable<ListComics>{
    const url = `${enviroment.urlAPI}comics?ts=${enviroment.ts}&apikey=${enviroment.apikey}&hash=${enviroment.hash}&limit=${enviroment.limit}`;

    return this.http.get<ListComics>(url);
  }
}
