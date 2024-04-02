import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListSeries } from '../../shared/models/serie.interface';
import { enviroment } from '../enviroment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getListSeries(): Observable<ListSeries>{
    const url = `${enviroment.urlAPI}series?ts=${enviroment.ts}&apikey=${enviroment.apikey}&hash=${enviroment.hash}&limit=${enviroment.limit}`;

    return this.http.get<ListSeries>(url);
  }
}
