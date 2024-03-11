import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.scss'
})
export class ClothingComponent {
  @Input({ required: true }) clothingType: string = '';
  @Input({ required: true}) clothingColection: string = '';
  @Input({ required: true }) isNewColection: boolean = false;
  @Input({ required: true }) clothingValue: number = 0;
  @Input({ required: true}) clothingIndex: number = 0;
  @Input() isClothingSelected: boolean = false;

  @Output() clothingClicked = new EventEmitter<number>();

  onClothingClicked() {
    this.isClothingSelected = !this.isClothingSelected;
    this.clothingClicked.emit(this.clothingIndex);
  }


}
