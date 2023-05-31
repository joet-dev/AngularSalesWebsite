import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SaleItem } from '../saleitem';

@Component({
  selector: 'app-sale-item',
  standalone: true,
  imports: [CommonModule,
    RouterModule,],
  template: `
    <section class="listing">
      <a [routerLink]="['/details', saleItem.id]">
        <div class="image-wrapper">
          <img class="listing-photo" [src]="saleItem.photo" alt="Exterior photo of {{saleItem.title}}">
        </div>
        <h2 class="listing-heading">{{ saleItem.title }}</h2>
        <p class="listing-info">\${{saleItem.price }} <small><u>{{ saleItem.modelNo }}</u></small></p>
      </a>
    </section>
  `,
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent {
  @Input() saleItem!: SaleItem;
}
