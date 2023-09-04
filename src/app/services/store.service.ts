import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Product[] = [];

  constructor() { }

  public getShoppingCart() : Product[] {
    return this.shoppingCart
  }

  addProduct(product: Product) : void{
    this.shoppingCart.push(product)
  }

  getTotalQuantity() : number {
    return this.shoppingCart.length;
  }

  getTotalPrice() : number {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
