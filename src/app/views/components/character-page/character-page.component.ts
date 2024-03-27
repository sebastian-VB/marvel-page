import { Component, HostListener, OnInit } from '@angular/core';
import { SearchEngineComponent } from '../../../shared/components/search-engine/search-engine.component';
import { CardElementComponent } from '../../../shared/components/card-element/card-element.component';
import { CharactersService } from '../../../core/services/characters.service';
import { Character, ListCharacters } from '../../../shared/models/chracter.interface';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [SearchEngineComponent, CardElementComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent implements OnInit {

  listCharacters: Character[] = [];

  constructor(private charactersSvc: CharactersService){}

  ngOnInit(): void {
    // this.charactersSvc.getListCharacter().subscribe((info: ListCharacters) => {
    //   this.listCharacters = info.data.results;
    //   console.log(this.listCharacters);
    // });
  }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(){
  //   // if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
  //   // if((window.innerHeight + window.scrollY) >= window.scrollY){
  //   if(window.scrollY >= window.scrollY){
  //     // console.log(window.innerHeight)
  //     console.log(window.scrollY)
  //     console.log(window.scrollY - 1)
  //     // console.log(document.body.offsetHeight)
  //     this.fillListCharacterForShow();
  //   }
  // }

  infoInputCharacter(value: string): void{
    console.log(value);
  }

  //funcion para llenar un array con una cantidad de datos de otro array.
  //usando la funcion array.slice(indice inicio, indice final)
  fillListCharacterForShow(): void{
    console.log("ejecutar funcion")
  }

}
