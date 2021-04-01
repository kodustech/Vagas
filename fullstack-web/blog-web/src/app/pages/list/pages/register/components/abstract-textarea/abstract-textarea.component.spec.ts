import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractTextareaComponent } from './abstract-textarea.component';

describe('AbstractTextareaComponent', () => {
  let component: AbstractTextareaComponent;
  let fixture: ComponentFixture<AbstractTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
