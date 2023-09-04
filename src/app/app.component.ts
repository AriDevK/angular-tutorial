import { Component } from '@angular/core';
import { product } from "./models/product.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: product[] = [
    {
      id : '1',
      name : 'Cirno Fumo',
      price : 50,
      img : './assets/images/cirnoFumo.jpg'
    },
    {
      id : '2',
      name : 'Marisa Fumo',
      price : 50,
      img : './assets/images/marisaFumo.jpg'
    },
    {
      id : '3',
      name : 'Reimu Fumo',
      price : 50,
      img : './assets/images/reimuFumo.jpg'
    },
    {
      id : '4',
      name : 'Scarlet Fumo',
      price : 50,
      img : './assets/images/scarletFumo.jpg'
    },
    {
      id : '5',
      name : 'Yuyuko Fumo',
      price : 50,
      img : './assets/images/yuyukoFumo.jpg'
    }
  ]
}
