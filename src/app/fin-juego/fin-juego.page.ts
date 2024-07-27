import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fin-juego',
  templateUrl: './fin-juego.page.html',
  styleUrls: ['./fin-juego.page.scss'],
})
export class FinJuegoPage implements OnInit {
  score: number=0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtiene el puntaje del parámetro de la URL
    this.route.queryParams.subscribe(params => {
      this.score = +params['score']; // Convierte el puntaje a número
    });
  }

  volverAOpciones() {
    // Redirige a la página de operaciones
    this.router.navigate(['/practica/opciones']);
  }
}
