import { Component, Input } from '@angular/core';
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

}
