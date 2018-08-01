import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureModelComponent } from './signature-model.component';

describe('SignatureModelComponent', () => {
  let component: SignatureModelComponent;
  let fixture: ComponentFixture<SignatureModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
