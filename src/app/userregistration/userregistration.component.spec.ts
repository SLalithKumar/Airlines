import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userregistrationComponent } from './userregistration.component';

describe('userregistrationComponent', () => {
  let component: userregistrationComponent;
  let fixture: ComponentFixture<userregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
