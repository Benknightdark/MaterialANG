import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetaformListComponent } from './form-metaform-list.component';

describe('FormMetaformListComponent', () => {
  let component: FormMetaformListComponent;
  let fixture: ComponentFixture<FormMetaformListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMetaformListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMetaformListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
