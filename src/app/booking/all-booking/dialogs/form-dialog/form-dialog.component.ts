import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { BookingService } from '../../booking.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Booking } from '../../booking.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  bookingForm: UntypedFormGroup;
  booking: Booking;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public bookingService: BookingService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.booking.name;
      this.booking = data.booking;
    } else {
      this.dialogTitle = 'New Booking';
      this.booking = new Booking({});
    }
    this.bookingForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.booking.id],
      img: [this.booking.img],
      name: [this.booking.name],
      email: [
        this.booking.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      arriveDate: [
        formatDate(this.booking.arriveDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      departDate: [
        formatDate(this.booking.departDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.booking.gender],
      mobile: [this.booking.mobile],
      roomType: [this.booking.roomType],
      payment: [this.booking.payment]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.bookingService.addBooking(this.bookingForm.getRawValue());
  }
}
