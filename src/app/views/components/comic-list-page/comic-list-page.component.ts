import { Component, OnInit, Signal, signal } from '@angular/core';
import { SearchEngineComponent } from '../../../shared/components/search-engine/search-engine.component';
import { CardElementComponent } from '../../../shared/components/card-element/card-element.component';
import { FloatingButtonComponent } from '../../../shared/components/floating-button/floating-button.component';
import { ComicsService } from '../../../core/services/comics.service';
import { Comic, ListComics } from '../../../shared/models/comic.interface';

@Component({
  selector: 'app-comic-list-page',
  standalone: true,
  imports: [SearchEngineComponent, CardElementComponent, FloatingButtonComponent],
  templateUrl: './comic-list-page.component.html',
  styleUrl: './comic-list-page.component.css'
})
export class ComicListPageComponent implements OnInit{

  listComics: Comic[] = [];
  listComicsGrowing = signal<Comic[]>([]);
  amountElements: number = 20;
  sizeList: number = 0;

  constructor(private comicsSvc: ComicsService){}

  ngOnInit(): void {
    this.comicsSvc.getListComic().subscribe((info: ListComics) =>{
      this.listComics = info.data.results;
      this.listComicsGrowing.set(this.listComics.slice(0, this.amountElements));
      console.log(this.listComicsGrowing());
    })
  }

  infoInputComic(value: string): void{
    console.log(value);
  }

  fillListComicForShow(flag: boolean): void{
    this.amountElements = this.amountElements + 20;
    if(flag && this.amountElements <= this.listComics.length){
      this.sizeList = this.listComicsGrowing().length;
      this.listComicsGrowing.update((comics: Comic[]) => {
        return [
          ...comics,
          ...this.listComics.slice(this.sizeList, this.amountElements)
        ]
      });
      console.log(this.listComicsGrowing());
    }
    else{
      alert("Ya no hay mas comics");
      this.amountElements = 101;
    }
  }
}
