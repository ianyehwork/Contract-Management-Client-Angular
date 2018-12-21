import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.css']
})
export class PageLoadingComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
