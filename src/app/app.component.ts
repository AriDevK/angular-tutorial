import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onRegister() {
    console.log(this.registerInfo)
    alert('Success')
  }
  registerInfo = {
    username: '',
    email: '',
    password: ''
  }
}
