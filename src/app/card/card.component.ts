import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input({ required: true }) planPrice: number = 0;

private _planType: string = ''; //_planType não é uma propriedade externalizada

@Input() set planType(value: string) //planType é a propriedade externalizada. Ou seja, a propriedade que vai receber o valor lá no input de card.component.html
//o "set" é para "setar" um valor. Ou seja, ele vai receber um valor e eu vou alocar esse valor em alguma outra variável...no nosso caso, a _planType
{
  this._planType = value.toUpperCase();
}

//"get"pega o valor atual que foi alocado anteriormente usando o "set".
get planType(): string {
  return this._planType;
}

buttonClicked(valueEmitted: boolean) {
  console.log('buttonClicked', valueEmitted);
}
}
