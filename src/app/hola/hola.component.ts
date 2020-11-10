import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.sass']
})
export class HolaComponent implements OnInit {
  titulo: string = 'Bievenido';
  users: string[] = ['juan', 'pedro', 'lucas']
  constructor() { }

  ngOnInit(): void {
  }

}
