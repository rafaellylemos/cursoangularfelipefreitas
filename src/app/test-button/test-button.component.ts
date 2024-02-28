import { Component } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.scss'
})
export class TestButtonComponent {
  buttonTitle = 'Título do botão';

  onButtonClick() {
    this.buttonTitle = 'Título Alterado';
  }
}
