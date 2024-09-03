import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistroyComponent } from './booking-histroy.component';

describe('BookingHistroyComponent', () => {
  let component: BookingHistroyComponent;
  let fixture: ComponentFixture<BookingHistroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingHistroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
