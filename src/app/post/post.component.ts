import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	
	constructor(private bd: DatabaseService) {}

	ngOnInit(): void {}

	onSubmit(f: NgForm) {
		console.log("Submit")
	}

	nuevoPost : any = {
		"descripcion": "", 
		"id": "", 
		"imagen": "", 
		"usuario": "@nuevopost"
	}
	
	subir() {
		this.bd.postPublicacion(this.nuevoPost).subscribe();
	}
}
