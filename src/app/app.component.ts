import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto_v16';

  inputText = "Texto Inicial";
  isDisabled = true;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }  
}
