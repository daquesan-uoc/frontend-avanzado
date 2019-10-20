import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-languages',
  templateUrl: './profile-languages.component.html',
  styleUrls: ['./profile-languages.component.scss']
})
export class ProfileLanguagesComponent implements OnInit {
  user: User;

  constructor(
    private location: Location,
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit() {
    // Se recupera el usuario conectado
    this.user = this.profileService.user;

    // Se comprueba que haya un usuario conectado o se vuelve a la
    // página de inicio
    if (!Object.keys(this.user).length) {
      this.router.navigate(['']);
    }
  }

  delete(uid: number) {
    this.user.languages = this.user.languages.filter(item => item.uid !== uid);
    this.profileService.updateProfile(this.user);
    this.reload();
  }

  back(){
    this.location.back();
  }

  reload(){
    this.router.navigate['/profile/profile-student/profile-languages'];
  }
}
