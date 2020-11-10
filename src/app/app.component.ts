import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  titulo: string = 'Main Component';
  users: string[] = ['juan', 'pedro', 'lucas']

  diHola() {
    alert('Clickeado');
  }
}
