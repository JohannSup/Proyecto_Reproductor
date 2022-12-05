import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  url='/api';
  constructor(private http: HttpClient) { }

//get Canciones
getCanciones(){
  return this.http.get(this.url);
}

//Get cancion por id
getUnaCancion(id:string){
  return this.http.get(this.url+'/'+id)
}

//Agregar canción
addCancion(cancion:Cancion){
return this.http.post(this.url, cancion);
}

//Eliminar canción
deleteCancion(id:string){
return this.http.delete(this.url+'/'+id);
}

//Modificar canción
editCancion(id:string, cancion:Cancion){
return this.http.put(this.url+'/'+id, cancion);
}

}

export interface Cancion{
  id_cancion:string;
  nombre_cancion?:string;
  genero?:string;
  artista?:string;
  caratula?:string;
}
