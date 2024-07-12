import { Component, HostListener, OnInit, signal } from '@angular/core';
import { SearchEngineComponent } from '../../../shared/components/search-engine/search-engine.component';
import { CardElementComponent } from '../../../shared/components/card-element/card-element.component';
import { FloatingButtonComponent } from '../../../shared/components/floating-button/floating-button.component';
import { Character, ListCharacters } from '../../../shared/models/chracter.interface';
import { CharactersService } from '../../../core/services/characters.service';


@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [SearchEngineComponent, CardElementComponent, FloatingButtonComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterListPageComponent implements OnInit {

  listCharacters: Character[] = [];
  listCharactersGrowing = signal<Character[]>([]);
  amountElements: number = 20;
  sizeList: number = 0;

  listElementSearch: Character[] = [];

  constructor(private charactersSvc: CharactersService){}

  ngOnInit(): void {
    this.charactersSvc.getListCharacter().subscribe((info: ListCharacters) => {
      this.listCharacters = info.data.results;
      this.listCharactersGrowing.set(this.listCharacters.slice(0, this.amountElements));
      //console.log(this.listCharactersGrowing());
    });
  }


  infoInputCharacter(value: string): void{
    console.log(value);
    let sum = 0;
    //realizar codigo de busqueda
    this.listCharacters.forEach(item => {
      if(item.name.toLowerCase().includes(value.toLowerCase())){
        this.listElementSearch.push(item);
      }
    });
    console.log(this.listElementSearch);
  }

  //funcion para llenar un array con una cantidad de datos de otro array.
  //usando la funcion array.slice(indice inicio, indice final)
  fillListCharacterForShow(flag: boolean): void{
    this.amountElements = this.amountElements+ 20;
    if(flag && this.amountElements <= this.listCharacters.length){
      this.sizeList = this.listCharactersGrowing().length;
      this.listCharactersGrowing.update((characters: Character[]) => {
        return [
          ...characters,
          ...this.listCharacters.slice(this.sizeList, this.amountElements)
        ]
      })
      console.log(this.listCharactersGrowing());
    }
    else{
      alert("Ya no hay mas personajes");
      this.amountElements = 101;
    }
  }

}
