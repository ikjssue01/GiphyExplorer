import { Component } from '@angular/core';
import { HomeComponent } from '../app/home/home.component';
import { GiphyComponent } from '../app/giphy/giphy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giphyApiExplorer';
}
