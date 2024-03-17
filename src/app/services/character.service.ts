import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestGetAll } from '../models/request-get-all';
import { RequestGetOne } from '../models/request-get-one';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(url: string): Observable<RequestGetAll>{
    return this.http.get<RequestGetAll>(url)
  }

  getOneCharacter(url: string, id: number): Observable<RequestGetOne>{
    return this.http.get<RequestGetOne>(`${url}/${id}`)
  }

  getCharacterByName(url: string, name: string): Observable<RequestGetAll>{
    return this.http.get<RequestGetAll>(`${url}?name=${name}`)
  }

  getCharacterByFilm(url: string, film: string): Observable<RequestGetAll>{
    return this.http.get<RequestGetAll>(`${url}?films=${film}`)
  }
}
