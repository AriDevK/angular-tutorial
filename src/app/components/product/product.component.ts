import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  counter = 0;
  private counterTimer : number | undefined;

  ngOnInit(): void {
    this.counterTimer = window.setInterval(() => this.counter++, 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.counterTimer)
  }

  @Input() product: product = {
    id: '0',
    name: '-',
    price: 0,
    img: './assets/images/image_not_found.jpeg'
  }
}
