import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  standalone: true,
  imports: [],
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.css'
})
export class FloatingButtonComponent {

  @Output() clickButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  sendValueBoolean(): void{
    this.clickButton.emit(true);
  }

}
