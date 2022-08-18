import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMasterclassComponent } from './rxjs-masterclass.component';

describe('RxjsMasterclassComponent', () => {
  let component: RxjsMasterclassComponent;
  let fixture: ComponentFixture<RxjsMasterclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMasterclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
