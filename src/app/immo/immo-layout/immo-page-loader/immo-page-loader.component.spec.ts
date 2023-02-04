import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ImmoPageLoaderComponent } from './immo-page-loader.component';
describe('PageLoaderComponent', () => {
  let component: ImmoPageLoaderComponent;
  let fixture: ComponentFixture<ImmoPageLoaderComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImmoPageLoaderComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoPageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
