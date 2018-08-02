import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfaxComponent } from './sendfax.component';

describe('SendfaxComponent', () => {
  let component: SendfaxComponent;
  let fixture: ComponentFixture<SendfaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendfaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendfaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
