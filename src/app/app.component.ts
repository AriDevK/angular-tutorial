import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resetCounter() {
    this.counter = 0;
  }
  decreaseCounter() {
    if (this.counter - 1 >= 0) {
      this.counter--;
    }
    else{
      alert('You cant decrement more the counter');
    }
  }
  increaseCounter() {
    this.counter++;
  }
  counter = 0
}
