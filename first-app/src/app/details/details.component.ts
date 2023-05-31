import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { StockService } from '../stock.service';
import { SaleItem } from '../saleitem';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <div class="detail-body">
        <div class="detail-image-wrapper">
          <img class="listing-photo" [src]="saleItem?.photo"
            alt="Photo of {{saleItem?.title}}"/>
        </div>
        <div class="detail-text-wrapper">
          <section class="listing-description">
            <h2 class="listing-heading">{{saleItem?.title}}</h2>
            <p class="listing-price">\${{saleItem?.price}}</p>
            <p class="listing-model">
              <small><u>{{saleItem?.modelNo}}</u></small>
            </p>
          </section>
          <section class="listing-features">
            <h2 class="section-heading">Details</h2>
            <p>{{saleItem?.description}}</p>
          </section>
        </div>
      </div>        
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute); 
  stockService = inject(StockService); 
  saleItem: SaleItem | undefined;

  constructor() {
    const saleItemId = Number(this.route.snapshot.params['id']); 
    this.saleItem = this.stockService.getSaleItemById(saleItemId); 
  }
}
