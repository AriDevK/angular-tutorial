import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: product = {
    id: '0',
    name: '-',
    price: 0,
    img: './assets/images/image_not_found.jpeg'
  }

  @Output() addedProduct = new EventEmitter<product>();

  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
