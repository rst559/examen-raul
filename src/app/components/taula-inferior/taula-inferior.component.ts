import { Component } from '@angular/core';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'taula-inferior-component',
  template: `
    <ul>
      <li *ngFor="let artwork of artworks">{{ artwork}}</li>
    </ul>
  `,
})
export class TaulaInferiorComponent {
  artworks = [];

  constructor(private api: ApiclientService) { }

  ngOnInit() {
    this.api.getArtworks().then((data: any) => {
      this.artworks = data.data;
    });
    console.log(this.artworks)
  }
}