import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-studies-management',
  templateUrl: './studies-management.component.html',
  styleUrls: ['./studies-management.component.scss']
})
export class StudiesManagementComponent implements OnInit {
  user: User;
  uid: number;

  level: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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

    // Se obtiene el identificador del estudio
    this.uid = Number(this.route.snapshot.paramMap.get('uid'));
  }

  // Crea los controles del formulario mostrando sus valores (si los tienen)
  fillForm() {
    // Se almacenan los valores iniciales del idioma
    /*if (this.uid !== 0){
      this.language = this.user.languages.find(item => item.uid == this.uid);
      this.languageLevel = this.language.level.name;
      this.languageName = this.language.name.name;
    }

    this.languagesManagementForm = this.formBuilder.group({
      languageName: [this.uid === 0 ? '' : this.language.name.uid, [Validators.required]],
      languageLevel: [this.uid === 0 ? '' : this.language.level.uid, [Validators.required]],
      other: [''],
      date: [this.uid === 0 ? '' : this.language.date, [Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/), Validators.required]]
    });*/
  }

  levelOnChange(event) {
    this.level = event.target.options[event.target.options.selectedIndex].text;
  }

  centerOnChange(event) {  }
  categoryOnChange(event) {  }
  gradeOnChange(event) {  }
  fpTitleOnChange(event) {  }

}
