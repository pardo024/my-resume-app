import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 disparador: EventEmitter<any>=new EventEmitter();
 public listadeemail:Array<any>=[];
 public listadetelefono:Array<any>=[];
 public listadedatosgenerales:Array<any>=[];
 public listadeescuelas:Array<any>=[];
 public listaskills:Array<any>=[];
 public listawork:Array<any>=[];

  constructor() { 
    
  }
  
  
}
