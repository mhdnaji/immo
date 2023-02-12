import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Booking } from './booking.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class BookingService {
  private readonly API_URL = 'assets/data/booking.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Booking[]> = new BehaviorSubject<Booking[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Booking[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllBookings(): void {
    this.httpClient.get<Booking[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addBooking(booking: Booking): void {
    this.dialogData = booking;
  }
  updateBooking(booking: Booking): void {
    this.dialogData = booking;
  }
  deleteBooking(id: number): void {
    console.log(id);
  }
}
