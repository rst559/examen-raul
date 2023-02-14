import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'taula-inferior-component',
  templateUrl: './taula-inferior.component.html',
  styleUrls: ['./taula-inferior.component.css']
})

export class TaulaInferiorComponent {
  artists: any;
  artworks: any;

  constructor(private api: ApiclientService) {
    this.artists = [];
    this.artworks = [];
  }

  ngOnInit(): void 
  {
    this.artists.push(this.api.getArtists());
  }

}