import { Component } from '@angular/core';
import { DividerCardComponent } from '../../../shared/components/divider-card/divider-card.component';
import { CardDividerInterface } from '../../../shared/models/card-divider.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DividerCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  listElements: CardDividerInterface[] = [
    {
      id: 1,
      titulo: 'Personajes',
      ruta: 'characters'
    },
    {
      id: 2,
      titulo: 'Comics',
      ruta: 'comics'
    },
    {
      id: 3,
      titulo: 'Creadores',
      ruta: 'creators'
    },
    {
      id: 4,
      titulo: 'Eventos',
      ruta: 'events'
    },
    {
      id: 5,
      titulo: 'Series',
      ruta: 'series'
    }
  ];

  constructor(private router: Router){}

  //recibe la ruta y tiene que redirigir
  pathForElement(path: string): void{
    console.log(path);
    this.router.navigate([path]);
  }

}
