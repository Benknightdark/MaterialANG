import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetaformComponent } from './form-metaform.component';

describe('FormMetaformComponent', () => {
  let component: FormMetaformComponent;
  let fixture: ComponentFixture<FormMetaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMetaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMetaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
