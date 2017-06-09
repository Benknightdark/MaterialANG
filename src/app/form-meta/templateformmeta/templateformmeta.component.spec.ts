import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformmetaComponent } from './templateformmeta.component';

describe('TemplateformmetaComponent', () => {
  let component: TemplateformmetaComponent;
  let fixture: ComponentFixture<TemplateformmetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformmetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
