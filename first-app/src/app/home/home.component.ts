import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleItemComponent } from '../sale-item/sale-item.component';
import { SaleItem } from '../saleitem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
            SaleItemComponent],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  saleItem : SaleItem = {
    id: 1, 
    title: 'Fast Car',
    price: 100, 
    modelNo: "XYZ123", 
    photo: 'assets/logo.svg',
    description: "Fast matchbox car." 
  };
}
