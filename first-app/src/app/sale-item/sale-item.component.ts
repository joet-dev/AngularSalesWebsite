import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleItem } from '../saleitem';

@Component({
  selector: 'app-sale-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <div class="image-wrapper">
        <img class="listing-photo" [src]="saleItem.photo" alt="Exterior photo of {{saleItem.title}}">
      </div>
      <h2 class="listing-heading">{{ saleItem.title }}</h2>
      <p class="listing-location">\${{saleItem.price }} <small><u>{{ saleItem.modelNo }}</u></small></p>
    </section>
  `,
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent {
  @Input() saleItem! : SaleItem; 
}
