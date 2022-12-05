import { Component, OnInit } from '@angular/core';
import {CancionService, Cancion} from '../../SERVICES/cancion.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //varibale
  ListarCancion!: Cancion[];

  constructor(private CancionService:CancionService, private router:Router) { }

  ngOnInit(): void {
    this.listarCancion();
  }


  listarCancion()
  {
    this.CancionService.getCanciones().subscribe(
      res=>{
        console.log(res);
        this.ListarCancion=<any>res;
      },
      err => console.log(err)
    );
  }


  eliminar(id:string)
  {
    this.CancionService.deleteCancion(id).subscribe(
      res=>{
        console.log('Canción eliminada');
        this.listarCancion();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }



}