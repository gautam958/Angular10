import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import {pluck} from 'rxjs/operators';
 
 interface WikipediaResponce{
   query:{
     search:{
       title:string;
       snippet:string;
       pageid:number;
     }[]
   }
 }


@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
  url: string = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  public search(term: string) {
    //console.log('I am the app and here is the term',term);
    return this.http.get<WikipediaResponce>(this.url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      }
    }).pipe(
      pluck('query','search')
    );
  }
}
