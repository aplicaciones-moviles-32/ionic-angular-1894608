import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

	constructor(private http: HttpClient, private db: DatabaseService) {}

	ngOnInit(): void {
		this.getDatosUsuario();
	}

	perfil: any = {}

	editando = false;

	toggleEditar(): void {
		this.editando = !this.editando;
	}

	@Input() bio: string = "";

	guardarBio(): void {
		this.perfil.descripcion = this.bio;
	}
	
	getDatosUsuario(): void {
		this.db.getRawUsuarios().subscribe((respuesta: any) => {
			respuesta.forEach((element: any) => {
				if (element.usuario == "r2d2")
					this.perfil = element;
			});
		});
	}
}