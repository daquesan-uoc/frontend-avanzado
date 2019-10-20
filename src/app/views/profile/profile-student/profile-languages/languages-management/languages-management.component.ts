import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';
import { Language, LanguageLevel, LanguageName } from 'src/app/shared/models/language.model';
import { DataService } from '../../../../../shared/services/data.service';
import { ThrowStmt } from '@angular/compiler';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-languages-management',
  templateUrl: './languages-management.component.html',
  styleUrls: ['./languages-management.component.scss']
})
export class LanguagesManagementComponent implements OnInit {
  user: User;
  uid: number;
  languagesManagementForm: FormGroup;
  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];

  language: Language;
  languageLevel: string;
  languageName: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private profileService: ProfileService,
    private dataService: DataService) { }

  ngOnInit() {
    // Se recupera el usuario conectado
    this.user = this.profileService.user;

    // Se comprueba que haya un usuario conectado o se vuelve a la
    // página de inicio
    if (!Object.keys(this.user).length) {
      this.router.navigate(['']);
    }

    // Se obtiene el identificador del idioma
    this.uid = Number(this.route.snapshot.paramMap.get('uid'));
    // Se obtienen los datos para las listas desplegables
    this.getData();
    // Se crean los controles y se muestran sus valores
    this.fillForm();
  }

  // Obtiene los datos maestros a partir de la información
  // proporcionada por el servicio
  getData(){
    this.dataService.getLanguageLeves().then(languageLevels => {
      this.languageLevels = languageLevels;
    });

    this.dataService.languageNames().then(languageNames => {
      this.languageNames = languageNames;
    });
  }

  // Crea los controles del formulario mostrando sus valores (si los tienen)
  fillForm() {
    // Se almacenan los valores iniciales del idioma
    if (this.uid !== 0){
      this.language = this.user.languages.find(item => item.uid == this.uid);
      this.languageLevel = this.language.level.name;
      this.languageName = this.language.name.name;
    }

    this.languagesManagementForm = this.formBuilder.group({
      languageName: [this.uid === 0 ? '' : this.language.name.uid, [Validators.required]],
      languageLevel: [this.uid === 0 ? '' : this.language.level.uid, [Validators.required]],
      other: [''],
      date: [this.uid === 0 ? '' : this.language.date, [Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/), Validators.required]]
    });
  }

  languageNameOnChange(event) {
    this.languageName = event.target.options[event.target.options.selectedIndex].text;

    const otherControl = this.languagesManagementForm.get('other');

    if (this.languageName === 'Otros'){
      otherControl.setValidators([Validators.minLength(3), Validators.maxLength(255), Validators.required]);
    } else {
      otherControl.setValidators(null);
      otherControl.setErrors(null);
    }
  }

  languageLevelOnChange(event) {
    this.languageLevel = event.target.options[event.target.options.selectedIndex].text;
  }

  getNextLanguageUid(): number {
    let uid = 0;
    this.user.languages.forEach(element => {
      if (element.uid > uid){
        uid = element.uid;
      }
    });
    return uid + 1;
  }

  getNextNameUid(): number {
    let uid = 0;
    this.languageNames.forEach(element => {
      if (element.uid > uid){
        uid = element.uid;
      }
    });
    return uid + 1;
  }

  getLanguageName(): string {
    return (this.languageName === 'Otros') ? this.languagesManagementForm.controls['other'].value : this.languageName;
  }

  save(){
    // Se obtiene el identificador del nombre del lenguaje
    let languageNameUid = this.languagesManagementForm.controls['languageName'].value;

    // Se comprueba si se va a añadir un nuevo nombre de idiom
    if (this.languageName === 'Otros'){
      this.languageName = this.languagesManagementForm.controls['other'].value;
      languageNameUid = this.getNextNameUid();
    }

    // Se comprueba si se va a crear un idioma nuevo
    if (this.uid === 0){
      this.language = {
        uid: this.getNextLanguageUid(),
        level: { uid: this.languagesManagementForm.controls['languageLevel'].value, name: this.languageLevel},
        name: { uid: languageNameUid, name: this.languageName },
        date: this.languagesManagementForm.controls['date'].value
      };

      // Se añade el lenguaje a la lista de lenguajes del usuario
      this.user.languages.push(this.language);
    } else {
      this.language.level.uid = this.languagesManagementForm.controls['languageLevel'].value;
      this.language.level.name = this.languageLevel;
      this.language.name.uid = languageNameUid;
      this.language.name.name = this.languageName;
      this.language.date = this.languagesManagementForm.controls['date'].value;
    }

    this.location.back();
  }
}
