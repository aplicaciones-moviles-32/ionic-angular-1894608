import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ionic-angular-1894608';
  total= 90;

  esCierto = true;

  imagenes = [
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg"
  ];

  perfil = true;

  togglePerfil(): void {
    this.perfil = !this.perfil;
  }


  
}
