import { Component } from '@angular/core';

import { HTMLLISTS } from './maplist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MapApp1';
  htmlList = HTMLLISTS;
}

