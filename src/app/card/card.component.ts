import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent {
tipo:string = 'Simples';
preco:number = 100;
}
