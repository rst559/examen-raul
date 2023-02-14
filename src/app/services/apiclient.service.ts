import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {
  constructor(private http: HttpClient) { }

  async getArtworks() {
    // we get the response from the API https://api.artic.edu/api/v1/artists
    return await this.http.get('https://api.artic.edu/api/v1/artworks').toPromise();
}
}
