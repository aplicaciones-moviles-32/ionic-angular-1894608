import { Component, OnInit } from '@angular/core';

import { DatabaseService } from './database.service';

@Component({
	selector: 'app-raiz',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'ionic-angular-1894608';

	constructor(private db: DatabaseService) {}

	imagenDePerfil: string = "";

	ngOnInit(): void {
		this.db.getRawUsuarios().subscribe((respuesta: any) => {
			respuesta.forEach((element: any) => {
				if (element.usuario == "r2d2")
					this.imagenDePerfil = element.imagenDePerfil;
			});
		});
	}
}