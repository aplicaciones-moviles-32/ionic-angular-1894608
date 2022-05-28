import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getDatosUsuario();
	}

	usuario: any = {}

	editando = false;

	toggleEditar(): void {
		this.editando = !this.editando;
	}

	@Input() bio: string = "";

	guardarBio(): void {
		this.usuario.descripcion = this.bio;
	}
	
	getDatosUsuario(): void {
		this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/usuario.json').subscribe(res => {
			console.log(res);
			this.usuario = res;
		});
	}
}