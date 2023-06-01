import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  url = 'https://api.jikan.moe/v4/anime'
  constructor(private _http: HttpClient) { }
  listAnime(){
    return this._http.get(this.url)
  }
}
