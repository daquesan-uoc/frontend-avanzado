import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileAccountComponent } from './profile-student/profile-account/profile-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileLanguagesComponent } from './profile-student/profile-languages/profile-languages.component';
import { LanguagesManagementComponent } from './profile-student/profile-languages/languages-management/languages-management.component';

@NgModule({
  declarations: [ProfileComponent, ProfileStudentComponent, ProfileAccountComponent, ProfileLanguagesComponent, LanguagesManagementComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
