import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.models';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  shoppingCart: product[] = [];
  shoppingTotal: number = 0;

  constructor(
    private storeService : StoreService
  ) {
  }

  ngOnInit(): void {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  addToCart(product: product) {
    this.storeService.addProduct(product)
    this.shoppingTotal = this.storeService.getTotalPrice();
  }

  products: product[] = [
    {
      id: '1',
      name: 'Cirno Fumo',
      price: 50,
      img: './assets/images/cirnoFumo.jpg'
    },
    {
      id: '2',
      name: 'Marisa Fumo',
      price: 70,
      img: './assets/images/marisaFumo.jpg'
    },
    {
      id: '3',
      name: 'Reimu Fumo',
      price: 70,
      img: './assets/images/reimuFumo.jpg'
    },
    {
      id: '4',
      name: 'Scarlet Fumo',
      price: 60,
      img: './assets/images/scarletFumo.jpg'
    },
    {
      id: '5',
      name: 'Yuyuko Fumo',
      price: 80,
      img: './assets/images/yuyukoFumo.jpg'
    }
  ]
}
