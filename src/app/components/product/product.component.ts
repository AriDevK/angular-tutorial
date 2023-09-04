import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '0',
    title: '-',
    price: 0,
    description: '-',
    category: '-',
    image: './assets/images/image_not_found.jpeg'
  }

  @Output() addedProduct = new EventEmitter<Product>();

  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
