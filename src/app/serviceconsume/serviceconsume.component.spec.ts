import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceconsumeComponent } from './serviceconsume.component';

describe('ServiceconsumeComponent', () => {
  let component: ServiceconsumeComponent;
  let fixture: ComponentFixture<ServiceconsumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceconsumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceconsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
