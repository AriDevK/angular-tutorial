import { Injectable } from '@angular/core';
import { product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: product[] = [];

  constructor() { }

  public getShoppingCart() : product[] {
    return this.shoppingCart
  }

  addProduct(product: product) : void{
    this.shoppingCart.push(product)
  }

  getTotalQuantity() : number {
    return this.shoppingCart.length;
  }

  getTotalPrice() : number {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
