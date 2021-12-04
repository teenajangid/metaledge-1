import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnSliderComponent } from './own-slider.component';

describe('OwnSliderComponent', () => {
  let component: OwnSliderComponent;
  let fixture: ComponentFixture<OwnSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
