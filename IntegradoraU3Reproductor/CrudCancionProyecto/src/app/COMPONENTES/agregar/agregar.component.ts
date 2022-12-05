import { Component, OnInit } from '@angular/core';
import {Cancion, CancionService} from '../../SERVICES/cancion.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cancion: Cancion={
    id_cancion:'',
    nombre_cancion:'',
    genero:'',
    artista:'',
    caratula:''
  };

  constructor(private CancionService:CancionService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
     this.cancion.id_cancion;

    this.CancionService.addCancion(this.cancion).subscribe();
    this.router.navigate(['/inicio']);
  }

}