import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {
  artists: any;
  artworks: any;
  constructor(private http: HttpClient) { 
    let artists = [];
    let artworks = [];
  }
  // we connect to the api and the recieved data we save in a array
  ngOnInit(): void {
    
  }
  getArtists(): Observable<any> {
    return this.http.get('https://api.artic.edu/api/v1/artists?limit=100').pipe(map((data: any) => {
      this.artists = data.data;
      return data;
    }));
  }
  getArtworks(): Observable<any> {
    return this.http.get('https://api.artic.edu/api/v1/artworks?limit=100').pipe(map((data: any) => {
      this.artworks = data.data;
      return data;
    }));
  }
}
