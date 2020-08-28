import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrxComponent } from './hrx.component';

describe('HrxComponent', () => {
  let component: HrxComponent;
  let fixture: ComponentFixture<HrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
