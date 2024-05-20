import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,NavbarComponent,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  router: any;

  constructor(private _fb:FormBuilder, private dialog: MatDialog) {
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
      const dialogRef = this.dialog.open(SignupDialogComponent, {
        data: {
          username: this.signupForm.value.username,
          email: this.signupForm.value.email
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.router.navigate(['/home']);
        }
      // this.router.navigate(['/home']); // twadene 3 safha tenye
    }
  )}
}
}
