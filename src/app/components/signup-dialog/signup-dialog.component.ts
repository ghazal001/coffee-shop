import { Component,Inject, OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-signup-dialog',
  standalone: true,
  imports: [],
  templateUrl: './signup-dialog.component.html',
  styleUrl: './signup-dialog.component.css'
})
export class SignupDialogComponent implements OnInit   {
  displayedColumns: string[] = ['username', 'email'];
  // dataSource: { field: string; value: string; }[] | undefined;
  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { username: string; email: string }
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}

