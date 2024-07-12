import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardDividerInterface } from '../../models/card-divider.interface';

@Component({
  selector: 'app-divider-card',
  standalone: true,
  imports: [],
  templateUrl: './divider-card.component.html',
  styleUrl: './divider-card.component.css'
})
export class DividerCardComponent {

  @Input() info!: CardDividerInterface;
  @Output () valuePath: EventEmitter<string> = new EventEmitter();

  //recoge la ruta y la emite al contenedor inteligente
  onSendPath(path: string): void{
    this.valuePath.emit(path);
  }

}
