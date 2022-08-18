import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProComponent } from './angular-pro.component';

describe('AngularProComponent', () => {
  let component: AngularProComponent;
  let fixture: ComponentFixture<AngularProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
