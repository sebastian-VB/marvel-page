import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {

  @Input() placeholderAtri: string = "";
  @Output() valueInput: EventEmitter<string> = new EventEmitter<string>();

  infoInput = new FormControl('',  {
    nonNullable: true,
    validators: [Validators.required]
  })

  getInfoInput(): void{
    this.valueInput.emit(this.infoInput.value);
    this.infoInput.reset();
  }

}
