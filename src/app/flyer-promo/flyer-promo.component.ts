import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flyer-promo',
  templateUrl: './flyer-promo.component.html',
  styleUrl: './flyer-promo.component.scss'
})
export class FlyerPromoComponent {

  @Input({ required: true }) cidade: string = '';
  @Input({ required: true }) passagem: number = 0;
  @Input({ required: true }) flyerIndex: number = 0;
  @Input() isFlyerSelected: boolean = false;


  @Output() classSelect = new EventEmitter<number>();

  selectedClass(){
    this.classSelect.emit(this.flyerIndex);
    this.isFlyerSelected = !this.isFlyerSelected;
  }
}
