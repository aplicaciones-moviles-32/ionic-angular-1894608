import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  publicaciones = [
    {
      "id": "432dffds8", 
      "imagen": "assets/imagenes/1.png",

    }, 
    {
      "id": "432dffds8dlkfd", 
      "imagen": "assets/imagenes/2.png",

    }, 
    {
      "id": "3c", 
      "imagen": "assets/imagenes/3.png",

    }, 
    {
      "id": "2b", 
      "imagen": "assets/imagenes/4.png",

    }, 
    {
      "id": "1a", 
      "imagen": "assets/imagenes/5.png",

    }
  ]

}
