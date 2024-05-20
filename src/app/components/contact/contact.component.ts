import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  standalone: true,

imports: [NavbarComponent,RouterModule,MatIconModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule, ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {

  }
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);
      alert('Message sent successfully!');
        // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });

    }
  }
}
