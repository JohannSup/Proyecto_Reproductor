import { Component, OnInit } from '@angular/core';
import {Cancion, CancionService} from '../../SERVICES/cancion.service';
import {Router, ActivatedRoute} from '@angular/router'; 


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  cancion: Cancion={
    id_cancion:'',
    nombre_cancion:'',
    genero:'',
    artista:'',
    caratula:''
  };

  constructor(private CancionService:CancionService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: '+id_entrada);

    /*if(id_entrada){
      this.CancionService.getUnaCancion(id_entrada).subscribe(
        res=>{
          this.cancion = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }*/
  }

  modificar()
  {

    this.CancionService.editCancion(this.cancion.id_cancion, this.cancion).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicio']);
  }

}