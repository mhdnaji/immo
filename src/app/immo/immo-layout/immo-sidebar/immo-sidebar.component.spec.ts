import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ImmoSidebarComponent } from './immo-sidebar.component';
describe('ImmoSidebarComponent', () => {
  let component: ImmoSidebarComponent;
  let fixture: ComponentFixture<ImmoSidebarComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImmoSidebarComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
