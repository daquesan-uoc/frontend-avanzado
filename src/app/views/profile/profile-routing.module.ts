import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileAccountComponent } from './profile-student/profile-account/profile-account.component';
import { ProfileLanguagesComponent } from './profile-student/profile-languages/profile-languages.component';
import { LanguagesManagementComponent } from './profile-student/profile-languages/languages-management/languages-management.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'profile-student/profile-account',
    component: ProfileAccountComponent
  },
  {
    path: 'profile-student/profile-languages',
    component: ProfileLanguagesComponent
  },
  {
    path: 'profile-student/profile-languages/languages-management/:uid',
    component: LanguagesManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
