import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(private http: HttpClient) { }

	getPublicaciones(): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/publicaciones.json');
	}

	getDatosUsuario(): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/usuario.json');
	}

	getPublicacionesUsuario(): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/usuario/publicaciones.json');
	}

	getPublicacionDetalle(id: string): any {
		return this.http.get('https://instacram-47c51-default-rtdb.firebaseio.com/usuario/publicaciones'+ id +'.json');
	}

	// POST
	postPublicacion(post: any) {
		return this.http.post('https://instacram-47c51-default-rtdb.firebaseio.com/usuario/publicaciones.json', post);
	}

	// DELETE
	deletePublicacion(idPost: any) {
		//return this.http.post('https://instacram-47c51-default-rtdb.firebaseio.com/usuario/publicaciones.json', idPost)
	}

	// PUT
	updatePublicacion() {}
}