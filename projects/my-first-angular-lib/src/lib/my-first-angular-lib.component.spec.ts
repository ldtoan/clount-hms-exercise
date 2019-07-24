import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstAngularLibComponent } from './my-first-angular-lib.component';

describe('MyFirstAngularLibComponent', () => {
  let component: MyFirstAngularLibComponent;
  let fixture: ComponentFixture<MyFirstAngularLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstAngularLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
