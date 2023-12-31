import { Component, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MAT_DIALOG_DATA ,MatDialogModule,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef: MatDialogRef<MatConfirmDialogComponent>
  )
  {
    
  }
  closeDialog()
  {
    this.dialogRef.close(false);
  }

}
