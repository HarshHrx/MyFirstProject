import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshkyaformComponent } from './ashkyaform.component';

describe('AshkyaformComponent', () => {
  let component: AshkyaformComponent;
  let fixture: ComponentFixture<AshkyaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshkyaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshkyaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
