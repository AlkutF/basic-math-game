import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage {
  imagensuma:string='';
  imagenresta:string='';
  imagenmultiplicacion:string='';
  imagendivision:string='';


  constructor(private router: Router) {
    this.imagensuma = 'assets/villains/suma.png';
    this.imagenresta = 'assets/villains/resta.png';
    this.imagenmultiplicacion = 'assets/villains/multiplicacion.png';
    this.imagendivision = 'assets/villains/division.png';
   }

  goToOperaciones(operacion: string) {
    this.router.navigate(['/practica/operaciones'], { queryParams: { tipo: operacion } });
  }
}
