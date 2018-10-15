import { Component, OnInit, Input } from '@angular/core';
import { PosterCardComponent } from '../poster-card/poster-card.component';

@Component({
  selector: 'app-poster-searchbar',
  templateUrl: './poster-searchbar.component.html',
  styleUrls: ['./poster-searchbar.component.css']
})
export class PosterSearchbarComponent implements OnInit {

  @Input() posterCard: PosterCardComponent;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.posterCard.filterPosterInCard(value);
  }

}
