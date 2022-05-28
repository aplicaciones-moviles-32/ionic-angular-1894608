import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit, OnChanges } from '@angular/core';

import { DatabaseService } from '../database.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
	constructor(private ruta: ActivatedRoute, private bd: DatabaseService) {}

	publicacion = this.ruta.snapshot.params['id'];
	publicacionImprimir: any = {}

	ngOnInit(): void {
		console.log(this.publicacion);
		this.obtenerPublicacion(this.publicacion);
	}

	obtenerPublicacion(id: string) : any {
		this.bd.getPublicacionDetalle(id);
	}
}