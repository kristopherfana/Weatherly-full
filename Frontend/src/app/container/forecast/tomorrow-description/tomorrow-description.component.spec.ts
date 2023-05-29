import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomorrowDescriptionComponent } from './tomorrow-description.component';

describe('TomorrowDescriptionComponent', () => {
  let component: TomorrowDescriptionComponent;
  let fixture: ComponentFixture<TomorrowDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomorrowDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomorrowDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
