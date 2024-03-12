import { Component } from '@angular/core';
import { DividerCardComponent } from '../../../shared/components/divider-card/divider-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DividerCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
