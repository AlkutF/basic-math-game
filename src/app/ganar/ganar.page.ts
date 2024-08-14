import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ganar',
  templateUrl: './ganar.page.html',
  styleUrls: ['./ganar.page.scss'],
})
export class GanarPage implements OnInit {
  tiempo: number=0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtiene el puntaje del parámetro de la URL
    this.route.queryParams.subscribe(params => {
      this.tiempo = +params['tiempo']; // Convierte el puntaje a número
    });
  }
  volverAOpciones() {
    // Redirige a la página de operaciones
    this.router.navigate(['/practica/opciones']);
  }
}
