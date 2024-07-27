import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage {

  constructor(private router: Router) { }

  goToOperaciones(operacion: string) {
    this.router.navigate(['/practica/operaciones'], { queryParams: { tipo: operacion } });
  }
}
