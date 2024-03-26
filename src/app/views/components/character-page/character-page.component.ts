import { Component } from '@angular/core';
import { SearchEngineComponent } from '../../../shared/components/search-engine/search-engine.component';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [SearchEngineComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent {

  constructor(){}

  infoInputCharacter(value: string): void{
    console.log(value);
  }

}
