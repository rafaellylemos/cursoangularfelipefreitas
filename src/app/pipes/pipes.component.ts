import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  text: string = 'Rafaelly';
  infos = [
    {name: 'Rafaelly', age: 34},
    {name: 'Pedro', age: 9},
  ]

  pessoa1 = {
    name: 'André',
    status: 1,
  };
  pessoa2 = {
    name: 'Cassandra',
    status: 2,
  };
  pessoa3 = {
    name: 'Fernando',
    status: 3,
  };
}
