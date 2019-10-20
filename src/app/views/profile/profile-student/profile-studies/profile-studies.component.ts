import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-profile-studies',
  templateUrl: './profile-studies.component.html',
  styleUrls: ['./profile-studies.component.scss']
})
export class ProfileStudiesComponent implements OnInit {
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
    this.user.studies = this.user.studies.filter(item => item.uid !== uid);
    this.profileService.updateProfile(this.user);
    this.reload();
  }

  back(){
    this.location.back();
  }

  reload(){
    this.router.navigate['/profile/profile-student/profile-studies'];
  }
}
