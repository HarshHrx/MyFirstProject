import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocrudComponent } from './democrud.component';

describe('DemocrudComponent', () => {
  let component: DemocrudComponent;
  let fixture: ComponentFixture<DemocrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
