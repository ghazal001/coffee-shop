import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NavbarComponent,
    MatCardModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RatingModule,
    FormsModule,

  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ ],
})
export class ProductComponent {
  value!: number;
  // constructor(private messageService: MessageService) {}

  //   show() {
  //       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  //   }
}
