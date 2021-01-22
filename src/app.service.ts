import { Injectable } from '@angular/core';
import { giphyApi } from './config';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService{
  URL = giphyApi;
  KEY = 'gdwjphWDU038gRbOZBeOX0oNWQZEdPGM';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public searchGifts(term){
    return this.httpClient.get(`${this.URL}/gifs/search?api_key=${this.KEY}&limit=25&rating=g&q=${term}`);
  }

}
