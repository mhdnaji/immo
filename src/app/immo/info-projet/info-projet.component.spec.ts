import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProjetComponent } from './info-projet.component';

describe('InfoProjetComponent', () => {
  let component: InfoProjetComponent;
  let fixture: ComponentFixture<InfoProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
