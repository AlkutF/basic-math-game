import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explicacion',
  templateUrl: './explicacion.page.html',
  styleUrls: ['./explicacion.page.scss'],
})
export class ExplicacionPage implements OnInit {
  tipoOperacion: string='';
  explicacion: string='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipoOperacion = params['tipo'];
      this.setExplicacion();
    });
  }

  setExplicacion() {
    switch (this.tipoOperacion) {
      case 'suma':
        this.explicacion = 'La suma es la operación matemática que representa la adición de dos números.';
        break;
      case 'resta':
        this.explicacion = 'La resta es la operación matemática que representa la sustracción de un número de otro.';
        break;
      case 'multiplicacion':
        this.explicacion = 'La multiplicación es la operación matemática que representa el producto de dos números.';
        break;
      case 'division':
        this.explicacion = 'La división es la operación matemática que representa la división de un número entre otro.';
        break;
      default:
        this.explicacion = 'Selecciona una operación para ver la explicación.';
    }
  }
}
