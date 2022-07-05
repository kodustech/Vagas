import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatimeInputComponent } from './datatime-input.component';

describe('DatatimeInputComponent', () => {
  let component: DatatimeInputComponent;
  let fixture: ComponentFixture<DatatimeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatimeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
