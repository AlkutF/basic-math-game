import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage {

  constructor(private router: Router) { }

  irAExplicacion(tipoOperacion: string) {
    // Navega a la página de explicación con el tipo de operación como parámetro
    this.router.navigate(['/teoria/explicacion'], { queryParams: { tipo: tipoOperacion } });
  }
}
