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
  saleItemList: SaleItem[] = [
    {
      id: 1,
      title: 'Fast Car',
      price: 100,
      modelNo: "XYZ123",
      photo: 'assets/logo.svg',
      description: "Fast matchbox car."
    },
    {
      id: 2,
      title: 'Example 1',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Fast matchbox car."
    },
    {
      id: 3,
      title: 'Example 2',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Fast matchbox car."
    },
    {
      id: 4,
      title: 'Example 3',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Fast matchbox car."
    },
    {
      id: 5,
      title: 'Example 4',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Fast matchbox car."
    },
    {
      id: 6,
      title: 'Example 5',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Fast matchbox car."
    },
  ];
}
