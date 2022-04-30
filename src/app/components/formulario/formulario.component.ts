import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
@ViewChild('astablaemail', { static: false }) tabla?: ElementRef;
@ViewChild('astablaescuela', { static: false }) tablaescuela?: ElementRef;
@ViewChild('asemail', { static: false }) email?: ElementRef;
@ViewChild('asnumero', { static: false }) numero?: ElementRef;
@ViewChild('asnombre', { static: false }) nombre?: ElementRef;
@ViewChild('asapellido', { static: false }) apellido?: ElementRef;
@ViewChild('asgrado', { static: false }) grado?: ElementRef;
@ViewChild('asinstitucion', { static: false }) institucion?: ElementRef;
@ViewChild('asfechainicio', { static: false }) fechainicio?: ElementRef;
@ViewChild('asfechafin', { static: false }) fechafin?: ElementRef;
@ViewChild('asdominio', { static: false }) dominio?: ElementRef;
@ViewChild('asvaluerange', { static: false }) valuedominio?: ElementRef;
@ViewChild('ashabilidad', { static: false }) habilidad?: ElementRef;
@ViewChild('astableskilss', { static: false }) tablaskills?: ElementRef;
@ViewChild('aspuesto', { static: false }) puesto?: ElementRef;
@ViewChild('asempresa', { static: false }) empresa?: ElementRef;
@ViewChild('asresponsabilidades', { static: false }) responsabilidades?: ElementRef;
@ViewChild('asfechainiciotrabajo', { static: false }) iniciotrabajo?: ElementRef;
@ViewChild('asfechafintrabajo', { static: false }) fintrabajo?: ElementRef;
@ViewChild('astablawork', { static: false }) tablawork?: ElementRef;
@ViewChild('asvistarespon', { static: false }) vistarespon?: ElementRef;
@ViewChild('asfoto', { static: false }) foto?: ElementRef;
id:number;
numdelete:number;
numescuela:number;
numskill:number;
numrespo:number;
numwork:number;
elemento2:any;

valtel:number;
valemail:number;
valacademia:number;
valtrabajo :number;
valskills:number;
valhabilidades:number;

public correos:string[];
public numeros:string[];
public arrayresponsabilidades:string[];
public newemail:string;
  constructor(private renderer2:Renderer2, private router: Router, private servicio:ServicioService) { 
  this.id=1;
  this.numdelete=1;
this.correos=[];
this.numeros=[];
this.arrayresponsabilidades=[];
this.newemail="";
this.numescuela=1;
this.numskill=1;
this.numrespo=1;
this.numwork=1;
this.valtel=0;
this.valemail=0;
this.valacademia=0;
this.valtrabajo =0;
this.valskills=0;
this.valhabilidades=0;
  }

addemail(){
const row = this.tabla?.nativeElement.insertRow();
const newemail =this.email?.nativeElement;
const newnumber =this.numero?.nativeElement;

const inpuemail=document.createElement('h1');
const inpunumero=document.createElement('h1');
row.innerHTML=` <div class="card-body">
</div>`;
inpuemail.classList.add('form-control')
inpuemail.innerHTML=` ${this.email?.nativeElement.value}`;
row.children[0].appendChild(inpuemail);
inpunumero.classList.add('form-control')
inpunumero.innerHTML=` ${this.numero?.nativeElement.value}`;
row.children[0].appendChild(inpunumero);



this.numdelete=((200)+this.id++);
inpuemail.setAttribute('id',this.numdelete.toString());
inpunumero.setAttribute('id',this.numdelete.toString());
row.setAttribute('id',this.numdelete.toString());
this.correos.push(newemail.value)
this.numeros.push(newnumber.value)

console.log(this.numdelete)
this.servicio.listadeemail.push({data:'Email: '+newemail.value}) 
  this.servicio.listadetelefono.push({data:'Telefono: '+newnumber.value}) 
  newemail.value="";
  newnumber.value="";
this.valemail++;
}

lessemail(){
  if(this.numdelete>200){
document.getElementById(this.numdelete.toString())?.remove();
console.log(this.numdelete.toString());
this.numdelete--;}
this.servicio.listadeemail.pop()
  this.servicio.listadetelefono.pop()
  
}

addescuela(){
console.log("add")
const rowescuela = this.tablaescuela?.nativeElement.insertRow();
const newgrado =this.grado?.nativeElement;
const newinstitucion =this.institucion?.nativeElement;
const newfechainicio =this.fechainicio?.nativeElement;
const newfechafin =this.fechafin?.nativeElement;
const newseparador ="";
const vistanewescuela=document.createElement("h1");
rowescuela.innerHTML=` <div class="card-body">
</div>`;
vistanewescuela.classList.add('form-control')
vistanewescuela.innerHTML=` <div  style="text-align: center;" > ${this.institucion?.nativeElement.value}</div>
${this.grado?.nativeElement.value} <br>
${this.fechainicio?.nativeElement.value}<br>
${this.fechafin?.nativeElement.value}<br>
`;
rowescuela.children[0].appendChild(vistanewescuela);
this.numescuela=((300)+this.id++);
rowescuela.setAttribute('id',this.numescuela.toString());
this.servicio.listadeescuelas.push({data:'Grado: '+newgrado.value}) 
this.servicio.listadeescuelas.push({data:'Institución: '+newinstitucion.value}) 
this.servicio.listadeescuelas.push({data:'Inicio: '+newfechainicio.value}) 
this.servicio.listadeescuelas.push({data:'Finalización: '+newfechafin.value})
this.servicio.listadeescuelas.push({data:newseparador})  
this.valacademia++;
}
lessescuela(){
console.log("less");
document.getElementById(this.numescuela.toString())?.remove();
this.numescuela--;
this.servicio.listadeescuelas.pop()
this.servicio.listadeescuelas.pop()
this.servicio.listadeescuelas.pop()
this.servicio.listadeescuelas.pop()
this.servicio.listadeescuelas.pop()

}



addresponsabilidad(){
 const newresponsabilidad=this.responsabilidades?.nativeElement;

 this.arrayresponsabilidades.push(newresponsabilidad.value);
 const rowresposabilidad = this.vistarespon?.nativeElement.insertRow();
 const elementorespo=document.createElement("h1");
 rowresposabilidad.innerHTML=` <div class="card-body">
 </div>`;
 elementorespo.classList.add('form-control')
 elementorespo.innerHTML=` <div  style="text-align: center;" >${this.arrayresponsabilidades[this.arrayresponsabilidades.length-1]}</div> `;
 rowresposabilidad.children[0].appendChild(elementorespo);
 this.numrespo=((500)+this.id++);
 rowresposabilidad.setAttribute('id',this.numrespo.toString());
newresponsabilidad.value="";
}

lessresponsabilidad(){
  
  document.getElementById(this.numrespo.toString())?.remove();
  this.numrespo--;
  this.arrayresponsabilidades.pop()
  

}


addtrabajo(){
  const newseparador ="";
  const rowwork = this.tablawork?.nativeElement.insertRow();
  const newpuesto =this.puesto?.nativeElement;
  const newempresa =this.empresa?.nativeElement;
  const newfechainiciotrabajo =this.iniciotrabajo?.nativeElement;
  const newfechafintrabajo =this.fintrabajo?.nativeElement;
  const vistawork=document.createElement("h1");

  
  var mostrarresponsabilidades = this.arrayresponsabilidades.map(function(num) {
    return(num);
  
});
  rowwork.innerHTML=` <div class="card-body">
  </div>`;
  vistawork.classList.add('form-control')
  vistawork.innerHTML=` ${this.puesto?.nativeElement.value}  <br>
  ${this.empresa?.nativeElement.value}<br>
  ${
   mostrarresponsabilidades
  }<br>
  ${this.iniciotrabajo?.nativeElement.value}<br>
  ${this.fintrabajo?.nativeElement.value}<br>
  `;
  rowwork.children[0].appendChild(vistawork);
  this.numwork=((600)+this.id++);
  rowwork.setAttribute('id',this.numwork.toString());

  const pu='Nombre empresa: ';
 this.servicio.listawork.push({data: pu+newempresa.value}) 
  this.servicio.listawork.push({data:'Puesto: '+newpuesto.value})
  this.servicio.listawork.push({data:'Responsabilidad: '+mostrarresponsabilidades})
  this.servicio.listawork.push({data:'Inicio: '+newfechainiciotrabajo.value})
  this.servicio.listawork.push({data:'Finalización: '+newfechafintrabajo.value})   
  this.servicio.listawork.push({data:newseparador})

  
this.arrayresponsabilidades=[];

this.valtrabajo++;
}


lesstrabajo(){
  document.getElementById(this.numwork.toString())?.remove();
  this.numwork--;
  this.servicio.listawork.pop()
  this.servicio.listawork.pop()
  this.servicio.listawork.pop()
  this.servicio.listawork.pop()
}
barradominio(){
 
  const newdominio= this.valuedominio?.nativeElement;
newdominio.value=this.dominio?.nativeElement.value;
}

addskill(){
  const rowskills = this.tablaskills?.nativeElement.insertRow();
  const newhablidad =this.habilidad?.nativeElement;
  const newrangevalue =this.valuedominio?.nativeElement;
  const vistaskills=document.createElement("h1");
  rowskills.innerHTML=` <div class="card-body">
  </div>`;
  vistaskills.classList.add('form-control')
  vistaskills.innerHTML=` ${this.habilidad?.nativeElement.value}  <br>
  ${this.valuedominio?.nativeElement.value}

  `;
  rowskills.children[0].appendChild(vistaskills);
  this.numskill=((400)+this.id++);
  rowskills.setAttribute('id',this.numskill.toString());
  this.servicio.listaskills.push({data:'Habilidad: '+newhablidad.value}) 
  this.servicio.listaskills.push({data:'Grado de dominio: '+newrangevalue.value+'%'})  
  this.valskills++;
}
lessskill(){
 
  document.getElementById(this.numskill.toString())?.remove();
  this.numskill--;
  this.servicio.listaskills.pop()
  this.servicio.listaskills.pop()

}



navegarfin(){
  const newnombre =this.nombre?.nativeElement;
  const newappelidio =this.apellido?.nativeElement;
  const newfoto =this.foto?.nativeElement;
  this.servicio.listadedatosgenerales.push({data:newnombre.value});
  this.servicio.listadedatosgenerales.push({data:newappelidio.value});
  this.servicio.listadedatosgenerales.push({data:newfoto.value});
console.log(this.valemail,this.valacademia,this.valtrabajo,this.valskills)
  if(this.valemail>=1 && this.valacademia>=1 && this.valtrabajo>=1 && this.valskills>=1 ){
    this.router.navigate(['/cv'])

  }else{
 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Seguro que ya llenaste por lo menos una vez cada requerimiento?',
    })
  }


}


autollenado(){
  Swal.fire(
    'Listo!!!',
    'Recurda presionar los botones de + y - en cada tarjeta para poder agregarlos',
    'success'
  )
// @ViewChild('asemail', { static: false }) email?: ElementRef;
const email =this.email?.nativeElement;
email.value="Okaypardo@gmail.com"
// @ViewChild('asnumero', { static: false }) numero?: ElementRef;
const numero =this.numero?.nativeElement;
numero.value="3511229827"
// @ViewChild('asnombre', { static: false }) nombre?: ElementRef;
const nombre =this.nombre?.nativeElement;
nombre.value="Enrique"
// @ViewChild('asapellido', { static: false }) apellido?: ElementRef;
const apellido =this.apellido?.nativeElement;
apellido.value="Pena nieto"
// @ViewChild('asgrado', { static: false }) grado?: ElementRef;
const Grado =this.grado?.nativeElement;
Grado.value="5"
// @ViewChild('asinstitucion', { static: false }) institucion?: ElementRef;
const institucion =this.institucion?.nativeElement;
institucion.value="Cbtis"
// @ViewChild('asfechainicio', { static: false }) fechainicio?: ElementRef;
const inicio =this.fechainicio?.nativeElement;
inicio.value="2015-02-11"
// @ViewChild('asfechafin', { static: false }) fechafin?: ElementRef;
const fin =this.fechafin?.nativeElement;
fin.value="2019-04-23"
// @ViewChild('asdominio', { static: false }) dominio?: ElementRef;
const dominio =this.habilidad?.nativeElement;
dominio.value="Programar en COBOL"
// @ViewChild('asvaluerange', { static: false }) valuedominio?: ElementRef;
const rango =this.valuedominio?.nativeElement;
rango.value="55"
// @ViewChild('aspuesto', { static: false }) puesto?: ElementRef;
const puesto =this.puesto?.nativeElement;
puesto.value="Gerente"
// @ViewChild('asempresa', { static: false }) empresa?: ElementRef;
const empresa =this.empresa?.nativeElement;
empresa.value="Grupo Merza"
// @ViewChild('asresponsabilidades', { static: false }) responsabilidades?: ElementRef;
const responsabilidad =this.responsabilidades?.nativeElement;
responsabilidad.value="Contrataciones"
// @ViewChild('asfechainiciotrabajo', { static: false }) iniciotrabajo?: ElementRef;
const iniciotra =this.iniciotrabajo?.nativeElement;
iniciotra.value="2019-04-23"
// @ViewChild('asfechafintrabajo', { static: false }) fintrabajo?: ElementRef;
const fintra =this.fintrabajo?.nativeElement;
fintra.value="2015-01-15"
// @ViewChild('asfoto', { static: false }) foto?: ElementRef;
const foto =this.foto?.nativeElement;
foto.value="https://pbs.twimg.com/profile_images/991180595710513152/V5O-Z320_400x400.jpg"
}
}

