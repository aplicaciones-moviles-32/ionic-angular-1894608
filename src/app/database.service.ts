import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(private http: HttpClient) { }

	getRawPublicaciones(): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/publicaciones.json');
	}

	getRawUsuarios(): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/usuarios.json');
	}

	getPublicacionesDeUsuario(usuario: any): any {
		var todasLasPublicaciones: any = this.getRawPublicaciones();
		var publicaciones: any = [];

		todasLasPublicaciones.subscribe((respuesta: any) => {
			respuesta.forEach((element: any) => {
				if (element.usuario == usuario)
					publicaciones.push(element);
			});
		});
		return publicaciones;
	}

	getPublicacionesUsuario(): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/usuario/publicaciones.json');
	}

	getPublicacionDetalle(id: string): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/usuario/publicaciones' + id + '.json');
	}

	// POST
	postPublicacion(post: any) {
		return this.http.post('https://instacram-47c51-default-rtdb.firebaseio.com/publicaciones.json', post);
	}

	// DELETE
	deletePublicacion(id: number) {
		return this.http.delete('https://instacram-47c51-default-rtdb.firebaseio.com/publicaciones/' + id.toString() + '.json')
	}

	// PUT
	updatePublicacion(id: number, nuevosDatos: any) {
		return this.http.put('https://instacram-47c51-default-rtdb.firebaseio.com/publicaciones/' + id.toString() + '.json', nuevosDatos)
	}
}