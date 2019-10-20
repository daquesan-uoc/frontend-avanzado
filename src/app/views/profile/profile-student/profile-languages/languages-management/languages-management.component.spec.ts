import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesManagementComponent } from './languages-management.component';

describe('LanguagesManagementComponent', () => {
  let component: LanguagesManagementComponent;
  let fixture: ComponentFixture<LanguagesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
