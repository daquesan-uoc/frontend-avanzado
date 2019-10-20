import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesManagementComponent } from './studies-management.component';

describe('StudiesManagementComponent', () => {
  let component: StudiesManagementComponent;
  let fixture: ComponentFixture<StudiesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
