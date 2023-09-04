import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onChildLoaded(imgResult: string) {
    console.log('Parente receive child event');
    console.log(imgResult);
  }

  imgData = 'https://avatars.githubusercontent.com/u/42656298?v=4'
}
