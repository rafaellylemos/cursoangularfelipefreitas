import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {

  @Input({required: true}) foodName: string = '';
  @Input({required: true}) foodPrice: number = 0;
  @Input({required: true}) foodStock: boolean = true;
  @Input({ required: true }) isFoodSelected: boolean = false;
  @Input({ required: true }) foodIndex: number = 0;

  @Output('foodSelect') onFoodSelectEmitt = new EventEmitter<number>();

  foodButton: boolean = false;

  foodSelectDiv() {
    this.onFoodSelectEmitt.emit(this.foodIndex);
    this.foodButton = true;
    if(!this.foodStock) {
      window.alert('Sem estoque!')
      this.foodButton = false;
    }
  }

  resetFoodButton() {
    this.foodButton = false;
  }
}
