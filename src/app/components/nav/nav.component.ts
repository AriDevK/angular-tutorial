import { Component, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnChanges, AfterViewChecked {
  cartItemsTotal: number = this.storeService.getTotalQuantity();

  constructor(
    private storeService: StoreService
  ) {
  }
  ngAfterViewChecked(): void {
    this.cartItemsTotal = this.storeService.getTotalQuantity();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cartItemsTotal = this.storeService.getTotalQuantity();
  }


}
