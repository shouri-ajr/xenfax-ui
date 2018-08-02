import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEditFaxComponent } from './model-edit-fax.component';

describe('ModelEditFaxComponent', () => {
  let component: ModelEditFaxComponent;
  let fixture: ComponentFixture<ModelEditFaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelEditFaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEditFaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
