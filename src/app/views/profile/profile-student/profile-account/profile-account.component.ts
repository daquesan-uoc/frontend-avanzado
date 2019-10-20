import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import { User, Province, Municipe, DocumentType } from '../../../../shared/models/user.model';
import { DocumentTypesService } from '../../../../shared/services/document-types.service';
import { ProvincesService } from '../../../../shared/services/provinces.service';
import { MunicipesService } from '../../../../shared/services/municipes.service';

@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.scss']
})
export class ProfileAccountComponent implements OnInit {
  user: User;
  profileAccountForm: FormGroup;
  documentTypes: DocumentType[];
  provinces: Province[];
  municipes: Municipe[];

  private documentType;
  private province;
  private municipe;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private profileService: ProfileService,
    private documentTypeService: DocumentTypesService,
    private provincesService: ProvincesService,
    private municipesService: MunicipesService) { }

  ngOnInit() {
    // Se recupera el usuario conectado
    this.user = this.profileService.user;

    // Se comprueba que haya un usuario conectado o se vuelve a la
    // página de inicio
    if (!Object.keys(this.user).length) {
      this.router.navigate(['']);
    }
    this.getMasterData();
    // Se crean los controles y se muestran sus valores
    this.fillForm();
  }

  // Obtiene los datos maestros a partir de la información
  // proporcionada por el servicio
  getMasterData(){
    this.documentTypeService.getdocumentTypes().then(documentTypes => {
      this.documentTypes = documentTypes;
    });

    this.provincesService.getProvinces().then(provinces => {
      this.provinces = provinces;
    });

    this.municipesService.getMunicipes().then(municipes => {
      this.municipes = municipes;
    });
  }

  // Crea los controles del formulario mostrando sus valores (si los tienen)
  fillForm() {
    this.profileAccountForm = this.formBuilder.group({
      name: [this.user.name, [Validators.minLength(3), Validators.maxLength(55), Validators.pattern(/^[a-zA-Z]+$/), Validators.required]],
      surname: [this.user.surname, [Validators.minLength(3), Validators.maxLength(55), Validators.pattern(/^[a-zA-Z]+$/), Validators.required]],
      birthdate: [this.user.birthdate, [Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/), Validators.required]],
      phone: [this.user.phone, [Validators.pattern(/^[0-9]+$/), Validators.required]],
      phone2: [this.user.phone2, [Validators.pattern(/^[0-9]+$/), Validators.required]],
      documentType: [this.user.documentType.uid, [Validators.required]],
      documentNumber: [this.user.documentNumber, [Validators.required]],
      street: [this.user.address.street, [Validators.required]],
      province: [this.user.address.province.uid, [Validators.required]],
      municipe: [this.user.address.municipe.uid, [Validators.required]],
      license: [this.user.license],
      aboutMe: [this.user.aboutMe],
      otherCompetences: [this.user.otherCompetences]
    });

    // Se almacenan las descripciones iniciales de los controles <select>
    this.documentType = this.user.documentType.name;
    this.province = this.user.address.province.name;
    this.municipe = this.user.address.municipe.name;
  }

  save(){
    this.user = { ...this.profileService.user, ...this.profileAccountForm.value };
    this.user.documentType = { uid: this.profileAccountForm.controls['documentType'].value, name: this.documentType};
    this.user.address.street = this.profileAccountForm.controls['street'].value;
    this.user.address.province = { uid: this.profileAccountForm.controls['province'].value, name: this.province};
    this.user.address.municipe = { uid: this.profileAccountForm.controls['municipe'].value, name: this.municipe};
    this.profileService.updateProfile(this.user);
    this.location.back();
  }

  documentTypeOnChange(event) {
    this.documentType = event.target.options[event.target.options.selectedIndex].text;
  }

  provinceOnChange(event) {
    this.province = event.target.options[event.target.options.selectedIndex].text;
  }

  municipeOnChange(event) {
    this.municipe = event.target.options[event.target.options.selectedIndex].text;
  }
}
