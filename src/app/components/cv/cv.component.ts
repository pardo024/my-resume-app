import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit  {
  @ViewChild('asimg', { static: false }) img?: ElementRef;

  constructor(private router:Router,private servicio:ServicioService) {

   }

public lista:string[]=[];
  ngOnInit(): void {

}
  
   get listadeemail():Array<any>{
    return this.servicio.listadeemail;
  }
  get listadetelefono():Array<any>{
    return this.servicio.listadetelefono;
  }
  get listadedatosgenerales():Array<any>{
    return this.servicio.listadedatosgenerales;
  }
  get listadeescuelas():Array<any>{
    return this.servicio.listadeescuelas;
  }
  get listaskills():Array<any>{
    return this.servicio.listaskills;
  }
  get listawork():Array<any>{
    return this.servicio.listawork;
  }
 

}
