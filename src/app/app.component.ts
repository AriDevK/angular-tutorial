import { Component } from '@angular/core';
import { Fumo } from "./fumo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fumoProducts: Fumo[] = [
    {
      name : "Yuyuko",
      price : 60,
      image : "./assets/images/yuyukoFumo.jpg"
    },
    {
      name : "Cirno",
      price : 60,
      image : "./assets/images/cirnoFumo.jpg"
    },
    {
      name : "Reimu",
      price : 60,
      image : "./assets/images/reimuFumo.jpg"
    },
    {
      name : "Marisa",
      price : 60,
      image : "./assets/images/marisaFumo.jpg"
    },
    {
      name : "Scarlet",
      price : 60,
      image : "./assets/images/scarletFumo.jpg"
    }
  ];
}
