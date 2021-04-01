import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTextareaComponent } from './description-textarea.component';

describe('DescriptionTextareaComponent', () => {
  let component: DescriptionTextareaComponent;
  let fixture: ComponentFixture<DescriptionTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
