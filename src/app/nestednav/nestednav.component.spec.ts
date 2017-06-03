import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestednavComponent } from './nestednav.component';

describe('NestednavComponent', () => {
  let component: NestednavComponent;
  let fixture: ComponentFixture<NestednavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestednavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestednavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
