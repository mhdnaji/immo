import { formatDate } from '@angular/common';
export class Booking {
  id: number;
  img: string;
  name: string;
  email: string;
  arriveDate: string;
  departDate: string;
  gender: string;
  mobile: string;
  roomType: string;
  payment: string;
  constructor(booking) {
    {
      this.id = booking.id || this.getRandomID();
      this.img = booking.avatar || 'assets/images/user/user1.jpg';
      this.name = booking.name || '';
      this.email = booking.email || '';
      this.arriveDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.departDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = booking.gender || '';
      this.mobile = booking.mobile || '';
      this.roomType = booking.roomType || '';
      this.payment = booking.payment || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
