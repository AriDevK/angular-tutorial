import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial';
  user = {
    name : 'Ariadne',
    age : 22,
  };
  profilePic = 'https://avatars.githubusercontent.com/u/42656298?v=4';
  randomPic = 'https://source.unsplash.com/random';
  btnDisabled = true;
}
