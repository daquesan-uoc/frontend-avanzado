import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signinService: SigninService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signin() {
    // Se llama al servicio para comprobar si los datos introducidos
    // corresponden a un usuario
    this.signinService.login(this.signinForm.value).then(user => {
      // Se comprueba si se ha recuperado un usuario
      if (user) {
        // Se almacena el usuario conectado
        this.profileService.user = user;
        // Se navega a la ventana de Dashboard
        this.router.navigate(['dashboard']);
      }
      // No se ha recuperado usuario, se indica que ha habido
      // un error en el intento de conexión
      this.error = true;
    });
  }
}
