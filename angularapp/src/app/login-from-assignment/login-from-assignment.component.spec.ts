import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFromAssignmentComponent } from './login-from-assignment.component';

describe('LoginFromAssignmentComponent', () => {
  let component: LoginFromAssignmentComponent;
  let fixture: ComponentFixture<LoginFromAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFromAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFromAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
