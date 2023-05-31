import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sale-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      sale-item works!
    </p>
  `,
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent {

}
