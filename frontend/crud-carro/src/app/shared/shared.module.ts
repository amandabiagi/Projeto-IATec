import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
