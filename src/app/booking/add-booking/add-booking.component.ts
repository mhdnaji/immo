import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.sass'],
})
export class AddBookingComponent {
  bookingForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {
    this.bookingForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      city: [''],
      arriveDate: ['', [Validators.required]],
      departDate: ['', [Validators.required]],
      totalPerson: ['', [Validators.required]],
      roomType: ['', [Validators.required]],
      address: [''],
      uploadFile: [''],
      note: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
  }
}
