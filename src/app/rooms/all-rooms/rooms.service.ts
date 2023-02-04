import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from './rooms.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class RoomService {
  private readonly API_URL = 'assets/data/rooms.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Room[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllRooms(): void {
    this.httpClient.get<Room[]>(this.API_URL).subscribe(
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
  addRoom(room: Room): void {
    this.dialogData = room;
  }
  updateRoom(room: Room): void {
    this.dialogData = room;
  }
  deleteRoom(id: number): void {
    console.log(id);
  }
}
