import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {

  @Input({transform: booleanAttribute}) buttonDesabled: boolean = false;

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('clicou!')
    this.buttonClickEmitter.emit(true);
  }
}
