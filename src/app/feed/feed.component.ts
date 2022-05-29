import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../database.service';

import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
	constructor(private db: DatabaseService, private popover: PopoverController) {}

	ngOnInit(): void {
		this.cargarFeed();
	}

	posts: any = [];

	isPopoverOpen: boolean = false;

	cargarFeed(): void {
		this.db.getRawPublicaciones().subscribe((respuesta: any) => {
			this.posts = respuesta;
		});
		this.posts.forEach((post: any) => {
			this.db.getRawUsuario(post.idUsuario).subscribe((respuesta: any) => {
				post.imagenDePerfil = respuesta.imagenDePerfil;
			});
		});
	}

	borrar(postId: any): void {
		this.db.deletePublicacion(postId).subscribe(respuesta => {
			this.cargarFeed();
		});
	}

	editando: boolean = false;

	editar() {
		this.editando = !this.editando;
	}

	guardar(idPost: number, nuevoCaption: any) {
		this.db.updatePublicacion(idPost, nuevoCaption).subscribe(respuesta => {
			console.log("Se actualizó la base de datos")
		});

		this.editar();
	}
}