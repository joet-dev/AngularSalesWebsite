import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { StockService } from '../stock.service';
import { SaleItem } from '../saleitem';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      <div class="detail-body">
        <div class="detail-form-wrapper">
          <section class="listing-apply">
            <h2 class="section-heading">Apply to recieve product updates!</h2>
            <form [formGroup]="applyForm" (submit)="submitApplication()">
              <label for="input-name">Name</label>
              <input id="input-name" type="text" formControlName="name">

              <label for="input-email">Email</label>
              <input id="input-email" type="email" formControlName="email">
              <button type="submit" class="primary">Apply now</button>
            </form>
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

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const saleItemId = Number(this.route.snapshot.params['id']); 
    this.saleItem = this.stockService.getSaleItemById(saleItemId); 
    
  }

  submitApplication() {
    this.stockService.submitApplication(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '' 
    );
  }

}

