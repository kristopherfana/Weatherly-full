import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindStatusComponent } from './wind-status.component';

describe('WindStatusComponent', () => {
  let component: WindStatusComponent;
  let fixture: ComponentFixture<WindStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
