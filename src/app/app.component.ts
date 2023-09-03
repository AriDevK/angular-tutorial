import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onInputHandler(event: Event) {
    let input = event.target as HTMLInputElement;
    this.username = input.value;
  }
  username = ""
}
