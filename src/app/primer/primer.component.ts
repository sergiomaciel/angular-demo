import { Component } from '@angular/core';

@Component({
  selector: 'hola-mundo',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.sass']
})
export class HelloWord {
   titulo = 'Hola Mundo';
}