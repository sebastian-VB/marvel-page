import { Component, HostListener, OnInit } from '@angular/core';
import { SearchEngineComponent } from '../../../shared/components/search-engine/search-engine.component';
import { CardElementComponent } from '../../../shared/components/card-element/card-element.component';
import { CharactersService } from '../../../core/services/characters.service';
import { Character, ListCharacters } from '../../../shared/models/chracter.interface';
import { FloatingButtonComponent } from '../../../shared/components/floating-button/floating-button.component';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [SearchEngineComponent, CardElementComponent, FloatingButtonComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent implements OnInit {

  listCharacters: Character[] = [];

  constructor(private charactersSvc: CharactersService){}

  ngOnInit(): void {
    this.charactersSvc.getListCharacter().subscribe((info: ListCharacters) => {
      this.listCharacters = info.data.results;
      console.log(this.listCharacters);
    });
  }


  infoInputCharacter(value: string): void{
    console.log(value);
  }

  //funcion para llenar un array con una cantidad de datos de otro array.
  //usando la funcion array.slice(indice inicio, indice final)
  fillListCharacterForShow(flag: boolean): void{
    if(flag){
      console.log("ejecutar funcion")
    }
  }

}
