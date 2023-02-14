import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiclientService } from './services/apiclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen-raul';
  artists: any;
  artworks: any;
  constructor(private http: ApiclientService) {
    this.artists = [];
    this.artworks = [];
    // try to get the data from the api
    this.http.getArtists().subscribe((data: any) => {
      this.artists = data.data;
    });
    this.http.getArtworks().subscribe((data: any) => {
      this.artworks = data.data;
    });
    console.log(this.http.getArtists().subscribe((data: any) => {
      this.artists = data.data;
    }));
  }


}
