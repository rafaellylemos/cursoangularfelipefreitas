import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Rafaelly Lemos', age: 34,},
    { name: 'Pedro Lemos', age: 9,},
    { name: 'André Souza', age: 35,},
    { name: 'Cassandra Trajano', age: 54,}
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
