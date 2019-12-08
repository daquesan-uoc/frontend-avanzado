import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
      FlexLayoutModule,
      MatSidenavModule,
      MatListModule,
      MatTooltipModule,
      MatOptionModule,
      MatSelectModule,
      MatMenuModule,
      MatSnackBarModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatRadioModule,
      MatCheckboxModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatDialogModule,
      MatInputModule,
      MatTableModule
  ],
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule
  ],
})

export class MaterialModule {}