import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterComponent } from './resgister.component';

describe('ResgisterComponent', () => {
  let component: ResgisterComponent;
  let fixture: ComponentFixture<ResgisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
