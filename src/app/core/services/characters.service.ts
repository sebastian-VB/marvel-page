import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment';
import { ListCharacters } from '../../shared/models/chracter.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getListCharacter(): Observable<ListCharacters>{
    const url = `${enviroment.urlAPI}characters?ts=${enviroment.ts}&apikey=${enviroment.apikey}&hash=${enviroment.hash}&limit=${enviroment.limit}`;

    return this.http.get<ListCharacters>(url);
  }

}
