import { Injectable } from '@angular/core';

import { SaleItem } from './saleitem';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  saleItemList: SaleItem[] = [
    {
      id: 1,
      title: 'Fast Car',
      price: 100,
      modelNo: "XYZ123",
      photo: 'assets/logo.svg',
      description: "Introducing the 1:60 scale model car, a meticulously crafted replica that captures the essence of its larger counterpart. Whether you're a passionate collector or simply appreciate the charm of automobiles, this affordable and captivating model car is a must-have. Get ready to experience the joy and magic of automotive fascination in a small, but mighty package."
    },
    {
      id: 2,
      title: 'Example 1',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Introducing the 1:60 scale model car, a meticulously crafted replica that captures the essence of its larger counterpart. Whether you're a passionate collector or simply appreciate the charm of automobiles, this affordable and captivating model car is a must-have. Get ready to experience the joy and magic of automotive fascination in a small, but mighty package."
    },
    {
      id: 3,
      title: 'Example 2',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Introducing the 1:60 scale model car, a meticulously crafted replica that captures the essence of its larger counterpart. Whether you're a passionate collector or simply appreciate the charm of automobiles, this affordable and captivating model car is a must-have. Get ready to experience the joy and magic of automotive fascination in a small, but mighty package."
    },
    {
      id: 4,
      title: 'Example 3',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Introducing the 1:60 scale model car, a meticulously crafted replica that captures the essence of its larger counterpart. Whether you're a passionate collector or simply appreciate the charm of automobiles, this affordable and captivating model car is a must-have. Get ready to experience the joy and magic of automotive fascination in a small, but mighty package."
    },
    {
      id: 5,
      title: 'Example 4',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Introducing the 1:60 scale model car, a meticulously crafted replica that captures the essence of its larger counterpart. Whether you're a passionate collector or simply appreciate the charm of automobiles, this affordable and captivating model car is a must-have. Get ready to experience the joy and magic of automotive fascination in a small, but mighty package."
    },
    {
      id: 6,
      title: 'Example 5',
      price: 100000,
      modelNo: "TEST123",
      photo: 'assets/logo.svg',
      description: "Introducing the 1:60 scale model car, a meticulously crafted replica that captures the essence of its larger counterpart. Whether you're a passionate collector or simply appreciate the charm of automobiles, this affordable and captivating model car is a must-have. Get ready to experience the joy and magic of automotive fascination in a small, but mighty package."
    },
  ];

  getAllSaleItems(): SaleItem[] {
    return this.saleItemList;
  }

  getSaleItemById(id: number): SaleItem | undefined {
    return this.saleItemList.find(saleItem => saleItem.id === id)
  }

  getSaleItemByPriceLessThan(price: number): SaleItem[] | undefined {
    return this.saleItemList.filter(saleItem => saleItem.price < price)
  }

  submitApplication(name: string, email: string) {
    console.log('Application received: ${name} - ${email}');
  }

  constructor() { }
}
