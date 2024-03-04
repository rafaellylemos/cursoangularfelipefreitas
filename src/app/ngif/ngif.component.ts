import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss'
})
export class NgifComponent {
  minhaProp = true;

  toggleProp() {
    this.minhaProp = !this.minhaProp;
  }
}
