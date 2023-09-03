import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  friends: string[] = [
    'Ari',
    'Ayken',
    'Kayzen',
    'Vasirus'
  ]
}
