import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit() {
    // Se comprueba que haya un usuario conectado o se vuelve a la
    // página de inicio
    if (!Object.keys(this.profileService.user).length) {
      this.router.navigate(['']);
    }
  }
}
