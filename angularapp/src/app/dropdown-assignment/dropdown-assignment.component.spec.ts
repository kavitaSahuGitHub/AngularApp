import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAssignmentComponent } from './dropdown-assignment.component';

describe('DropdownAssignmentComponent', () => {
  let component: DropdownAssignmentComponent;
  let fixture: ComponentFixture<DropdownAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
