import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment';
import { ListCharacters } from '../../shared/models/chracter.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  ts: number = 1;
  apikey: string = "daa4ef86432fd36240cf0e98419ae0a8";
  hash: string = "eb1e4bd208f719ef0d2cce5ddfd23474";
  limit: number = 100;

  constructor(private http: HttpClient) { }

  getListCharacter(): Observable<ListCharacters>{
    const url = `${enviroment.urlAPI}characters?ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}&limit=${this.limit}`;

    return this.http.get<ListCharacters>(url);
  }

}
