import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ImmoRightSidebarComponent } from './immo-right-sidebar.component';
describe('ImmoRightSidebarComponent', () => {
  let component: ImmoRightSidebarComponent;
  let fixture: ComponentFixture<ImmoRightSidebarComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImmoRightSidebarComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
