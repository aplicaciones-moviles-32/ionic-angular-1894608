import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';

@Component({
	selector: 'app-publicaciones',
	templateUrl: './publicaciones.component.html',
	styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

	constructor(private http: HttpClient, private bd: DatabaseService) { }

	ngOnInit(): void {
		this.publicaciones = this.bd.getPublicacionesDeUsuario("r2d2");
	}

	publicaciones: any = [];

	activo = 'grid';

	toggleActivo(activo: string): void {
		this.activo = activo;
	}
}