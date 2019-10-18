import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UOCJob';

  /* Muestra el mensaje recibido en un diálogo de alerta */
  showMessage(message: string) {
    alert(message);
  }
}