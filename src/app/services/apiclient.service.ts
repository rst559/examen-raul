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
    this.getArtists().subscribe((data: any) => {
      artists = data.data;
    }
    );
    this.getArtworks().subscribe((data: any) => {
      artworks = data.data;
    });
  }
  // we connect to the api and the recieved data we save in a array
  ngOnInit(): void {
    
  }
  // we get the artists from the api
  getArtists(): Observable<any> {
    return this.http.get('https://api.artic.edu/api/v1/artists');
  }
  // we get the artworks from the api
  getArtworks(): Observable<any> {
    return this.http.get('https://api.artic.edu/api/v1/artworks');
  }

}
