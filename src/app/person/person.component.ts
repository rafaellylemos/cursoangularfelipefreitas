import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
 @Input({ required: true }) pName: string = '';
 @Input({ required: true }) pProfession: string = '';
 @Input({ required: true }) pAge: number = 0;
 @Input({ required: true }) pStatus: string = '';
 @Input({ required: true }) pIndex: number = 0;
 @Input({ required: true }) isSelected: boolean = false;

 @Output('personSelected') onSelectDivEmitt = new EventEmitter<number>();

 selectDiv() {
  this.onSelectDivEmitt.emit(this.pIndex);
 }
}
