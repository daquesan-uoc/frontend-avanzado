import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {
  user: User;

  constructor(
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
}
