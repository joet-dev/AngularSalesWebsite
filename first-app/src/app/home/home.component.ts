import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleItemComponent } from '../sale-item/sale-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
            SaleItemComponent],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
