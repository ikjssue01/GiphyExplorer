import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {
  searchGift: string;
  listGifts: [];

  constructor( private apiService: ApiService,) { }

  ngOnInit(): void {
  }

  getGift(): void{
    this.apiService.searchGifts(this.searchGift);
    this.apiService.searchGifts(this.searchGift).subscribe((data:any) => {
      this.listGifts = data.data;
    }, error => {
      console.log('Ups we have an Error!');
    });
  }

}
