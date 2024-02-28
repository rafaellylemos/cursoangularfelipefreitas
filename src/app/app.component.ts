import { Component } from '@angular/core';

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
