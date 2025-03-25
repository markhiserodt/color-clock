import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomClockComponent } from './custom-clock.component';

describe('CustomClockComponent', () => {
  let component: CustomClockComponent;
  let fixture: ComponentFixture<CustomClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
