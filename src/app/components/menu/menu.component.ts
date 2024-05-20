import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import {  MatDialogRef} from '@angular/material/dialog';
import {  MessageService } from 'primeng/api';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NavbarComponent,MatCardModule, MatButtonModule,ToastModule, ButtonModule, RippleModule],
  providers:[MessageService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MenuComponent {
  // constructor(public dialogRef: MatDialogRef<ProductDialogComponent>) { }

  // closeDialog(): void {
  //   this.dialogRef.close();
  // }
  constructor(private messageService: MessageService) {}

  showContrast(){
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Done ' });
  }
}
