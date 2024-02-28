import { Component } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.scss'
})
export class TestButtonComponent {
  buttonTitle = 'Título do botão';
  widthButton = '200px';
  bgButton = 'red';
  stylesObj = {
    width: '300px',
    backgroundColor: 'orange',
  }

  onButtonClick() {
    this.buttonTitle = 'Título Alterado';
  }

  updateStylesObj(){
    this.stylesObj = {
      width: '400px',
      backgroundColor: 'green'
    }
  }

  updateWidth(){
    this.widthButton = '500px';
  }
}
