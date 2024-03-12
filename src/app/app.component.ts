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
    this.onDivItemSelectEmitt.emit;
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

  food = [
    { name: 'Banana', price: 2, stock: false },
    { name: 'Maçã', price: 4, stock: false },
    { name: 'Laranja', price: 2, stock: true },
    { name: 'Pêra', price: 6, stock: false },
    { name: 'Abacaxi', price: 5, stock: true },
    { name: 'Mamão', price: 1, stock: true },
    { name: 'Kiwi', price: 7, stock: true },
    { name: 'Uva', price: 3, stock: false },
  ]

  foodSelected: number | undefined;

  foodSelectDiv(index: number) {
    this.foodSelected = index;
  }

  @Output('divFoodItemSelect') onFoodItemSelectEmitt = new EventEmitter();

  foodItemSelect(){
    this.onFoodItemSelectEmitt.emit;
  }

  clothing = [
    {type:'Blusa', colection: 'Recife', newColection: false, value: 99, },
    {type:'Blusa', colection: 'Olinda', newColection: false, value: 99, },
    {type:'Blusa', colection: 'Sampa', newColection: true, value: 119, },
    {type:'short', colection: 'Rio', newColection: false, value: 79, },
    {type:'Cropped', colection: 'Jampa', newColection: true, value: 54, },
    {type:'Blusa', colection: 'Brasília', newColection: true, value: 119, },
    {type:'Blusa', colection: 'Minas', newColection: true, value: 119, },
    {type:'Short', colection: 'Recife', newColection: false, value: 79, },
    {type:'Calça', colection: 'Recife', newColection: false, value: 187, },
    {type:'Vestido', colection: 'Sampa', newColection: true, value: 210, }
  ]

  isClothingSelected: number | undefined;

  selectClothing(index: number) {
    this.isClothingSelected = index;
  }

  bgColor: 'white' | 'black'= 'white';
  buttonBgColor: 'white' | 'black'= 'black';
  colorTextContentButton: 'white' | 'black'= 'black';
  textContentButton: string = 'Dark Mode';
  borderColorButton: 'white' | 'black' = 'black';

  onChangeBackgroundColorPage() {
    if (this.bgColor === 'white') {
      this.bgColor = 'black';
      this.textContentButton = 'Light Mode';
      this.colorTextContentButton = 'white';
      this.borderColorButton = 'white';
    } else {
      this.bgColor = 'white';
      this.textContentButton = 'Dark Mode';
      this.colorTextContentButton = 'black';
      this.borderColorButton = 'black';
    }
  }
}
