import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto_v16';

  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  inputText = "Texto Inicial";
  isDisabled = true;
  isRedButton = true;
  isGreen = true;

  person = [
    { name: 'Rafaelly Lemos', profession: 'Fotógrafa',  age: 34, status: 'Namorando', },
    { name: 'Pedro Lemos', profession: 'Estudante',  age: 9, status: 'Solteiro', },
    { name: 'André Souza', profession: 'Desenvolvedor Frontend',  age: 35, status: 'Namorando', },
    { name: 'Cassandra Trajano', profession: 'Professora',  age: 54, status: 'Casada', },
  ]

  @Output('divItemSelect') onDivItemSelectEmitt = new EventEmitter();

  itemSelect() {
    this.onDivItemSelectEmitt.emit
  }

  isDivSelect: number | undefined;

  selectDiv(index: number) {
    this.isDivSelect = index;
  }

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }

  enableInput() {
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }  

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }
}
