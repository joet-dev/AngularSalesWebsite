import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleItemComponent } from '../sale-item/sale-item.component';
import { SaleItem } from '../saleitem';

import { StockService } from '../stock.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    SaleItemComponent],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  saleItemList: SaleItem[] = [];

  stockService: StockService = inject(StockService);

  constructor() {
    this.saleItemList = this.stockService.getAllSaleItems(); 
  }
}
