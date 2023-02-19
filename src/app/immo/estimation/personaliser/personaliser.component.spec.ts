import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaliserComponent } from './type-detail.component';

describe('TypeDetailComponent', () => {
  let component: PersonaliserComponent;
  let fixture: ComponentFixture<PersonaliserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaliserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaliserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
