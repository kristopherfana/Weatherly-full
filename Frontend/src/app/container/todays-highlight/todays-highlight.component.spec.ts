import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysHighlightComponent } from './todays-highlight.component';

describe('TodaysHighlightComponent', () => {
  let component: TodaysHighlightComponent;
  let fixture: ComponentFixture<TodaysHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
