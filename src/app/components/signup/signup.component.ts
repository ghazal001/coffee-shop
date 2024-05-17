import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  router: any;

  constructor(private _fb:FormBuilder ) {
    this.signupForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      // console.log('Form Submitted!', this.signupForm.value);
      this.router.navigate(['/home']); // twadene 3 safha tenye
    }
  }
}
