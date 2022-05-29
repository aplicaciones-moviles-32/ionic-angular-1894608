import { Component, OnInit } from '@angular/core';

import { DatabaseService } from './database.service';

@Component({
	selector: 'app-raiz',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'ionic-angular-1894608';

	constructor(private bd: DatabaseService) {}

	usuario: string = "";
	avatar: string = "";

	ngOnInit(): void {}
}