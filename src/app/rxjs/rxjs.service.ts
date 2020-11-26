import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplaceResponse
{
   urls:{
     regular:string;
   }
}

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private http: HttpClient) { }

   getPhoto(){
     return this.http.get<UnsplaceResponse>('https://api.unsplash.com/photos/random',{
       headers:{
        Authorization:
          'Client-ID IUX5p5u8ha-GegGjp40MU_ZpI6aQeYZxGuZl9kUyb1Y'
       }
     });
   }
}
