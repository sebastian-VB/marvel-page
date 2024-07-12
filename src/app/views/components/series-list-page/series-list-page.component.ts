import { Component, OnInit, signal } from '@angular/core';
import { SearchEngineComponent } from '../../../shared/components/search-engine/search-engine.component';
import { CardElementComponent } from '../../../shared/components/card-element/card-element.component';
import { FloatingButtonComponent } from '../../../shared/components/floating-button/floating-button.component';
import { SeriesService } from '../../../core/services/series.service';
import { ListSeries, Serie } from '../../../shared/models/serie.interface';

@Component({
  selector: 'app-series-list-page',
  standalone: true,
  imports: [SearchEngineComponent, CardElementComponent, FloatingButtonComponent],
  templateUrl: './series-list-page.component.html',
  styleUrl: './series-list-page.component.css'
})
export class SeriesListPageComponent implements OnInit{

  listSeries: Serie[] = [];
  listSeriesGrowing = signal<Serie[]>([]);
  amountElements: number = 20;
  sizeList: number = 0;

  constructor(private seriesSvc: SeriesService){}

  ngOnInit(): void {
    this.seriesSvc.getListSeries().subscribe((info: ListSeries) =>{
      this.listSeries = info.data.results;
      this.listSeriesGrowing.set(this.listSeries.slice(0, this.amountElements));
      console.log(this.listSeriesGrowing());
    })
  }

  infoInputSerie(value: string): void{
    console.log(value);
  }

  fillListSerieForShow(flag: boolean): void{
    this.amountElements = this.amountElements + 20;
    if(flag && this.amountElements <= this.listSeries.length){
      this.sizeList = this.listSeriesGrowing().length;
      this.listSeriesGrowing.update((comics: Serie[]) => {
        return [
          ...comics,
          ...this.listSeries.slice(this.sizeList, this.amountElements)
        ]
      });
      console.log(this.listSeriesGrowing());
    }
    else{
      alert("Ya no hay mas comics");
      this.amountElements = 101;
    }
  }

}
