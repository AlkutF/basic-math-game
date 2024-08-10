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

  irAExplicacion(tipoOperacion: string) {
    // Navega a la página de explicación con el tipo de operación como parámetro
    this.router.navigate(['/teoria/explicacion'], { queryParams: { tipo: tipoOperacion } });
  }
}
