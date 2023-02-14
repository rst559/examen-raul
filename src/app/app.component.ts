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
  constructor(private http: ApiclientService) {
    this.http = http;
    console.log(this.http.getArtworks())
  }

}
