import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { StoreService } from "../../services/store.service";
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  shoppingCart: Product[] = [];
  shoppingTotal: number = 0;
  products: Product[] = []

  constructor(
    private storeService : StoreService,
    private productService : ProductsService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAll()
    .subscribe((data) => {
      console.log(data);
      this.products = data
    });
  }

  addToCart(product: Product) {
    this.storeService.addProduct(product)
    this.shoppingTotal = this.storeService.getTotalPrice();
  }
}
