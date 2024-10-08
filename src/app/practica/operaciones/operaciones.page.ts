import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit, OnDestroy {
  tipoOperacion: string = '';
  num1: number=0;
  num2: number=0;
  resultado: number=0;
  numeros: string='';
  resultadosArray: number[] = [];
  rango: number = 10; // Rango para los números aleatorios cercanos al resultado
  score: number = 0; // Puntaje inicial
  vidas: number = 3; // Vidas iniciales
  tiempoRestante: number = 120; // Tiempo en segundos (2 minutos)
  estrella:string = '/assets/imagenes/estrella.png';
  reloj:string = '/assets/imagenes/reloj.png';
  villano:string = '';
  Condicion_Victoria:string = '';
  private destroy$ = new Subject<void>(); // Subject para la cancelación
  

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipoOperacion = params['tipo'];
      this.iniciarJuego();
    });
  }

  iniciarJuego() {
    this.score = 0;  // Reinicia el puntaje
    this.vidas = 3;  // Reinicia las vidas
    this.tiempoRestante = 120;  // Reinicia el tiempo
    this.generarOperacion();
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        this.finalizarJuego();
      }
    });
  }

  generarOperacion() {
    this.num1 = this.generarNumeroAleatorio();
    this.num2 = this.generarNumeroAleatorio();
  
    switch (this.tipoOperacion) {
      case 'suma':
        this.resultado = this.num1 + this.num2;
        this.numeros = `${this.num1} + ${this.num2}`;
        this.villano = '/assets/villains/suma.png';
        this.Condicion_Victoria = 'Para derrorar a Sumara debes sumar un total de 50 puntos , ten en cuenta que el enemigo te la podra mas dificil a mas puntos tengas si logras vencerlo antes de que se acabe el tiempo habras ganado'; 
        break;
      case 'resta':
        this.resultado = this.num1 - this.num2;
        this.numeros = `${this.num1} - ${this.num2}`;
        this.villano = '/assets/villains/resta.png';
        this.Condicion_Victoria = 'Para derrorar a Resterom debes sumar un total de 50 puntos , ten en cuenta que el enemigo te la podra mas dificil a mas puntos tengas si logras vencerlo antes de que se acabe el tiempo habras ganado'; 
        break;
      case 'multiplicacion':
        this.resultado = this.num1 * this.num2;
        this.numeros = `${this.num1} x ${this.num2}`;
        this.villano = '/assets/villains/multiplicacion.png';
        this.Condicion_Victoria = 'Para derrorar a Multiplex debes sumar un total de 50 puntos , ten en cuenta que el enemigo te la podra mas dificil a mas puntos tengas si logras vencerlo antes de que se acabe el tiempo habras ganado'; 
        break;
      case 'division':
        // Asegura que la división sea exacta y que no haya división por cero
        if (this.num2 === 0) {
          this.num2 = 1; // Cambia el divisor a 1 si es 0
        }
        this.resultado = parseFloat((this.num1 / this.num2).toFixed(1));
        this.numeros = `${this.num1} / ${this.num2}`;
        this.villano = '/assets/villains/division.png';
        this.Condicion_Victoria = 'Para derrorar a la Divisora debes sumar un total de 50 puntos , ten en cuenta que el enemigo te la podra mas dificil a mas puntos tengas si logras vencerlo antes de que se acabe el tiempo habras ganado'; 
        break;
      default:
        this.resultado = 0;
        this.numeros = '';
        break;
    }
    this.guardarResultado();
  }
  

  generarNumeroAleatorio(): number {
    const max = this.score > 40 ? 100 : 10; // Ajusta el máximo basado en el puntaje
    return Math.floor(Math.random() * (max - 1)) + 1; 
  }

  calcularResultado() {
    switch (this.tipoOperacion) {
      case 'suma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'resta':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacion':
        this.resultado = this.num1 * this.num2;
        break;
      case 'division':
        this.resultado = this.num2 !== 0 ? parseFloat((this.num1 / this.num2).toFixed(1)) : 0;
        break;
      default:
        this.resultado = 0;
        break;
    }
    this.guardarResultado();
  }

  guardarResultado() {
    this.resultadosArray = [
      this.generarNumeroCercano(this.resultado),
      this.generarNumeroCercano(this.resultado),
      this.generarNumeroCercano(this.resultado),
      this.resultado
    ];
    this.barajarArray(this.resultadosArray);
  }

  generarNumeroCercano(base: number): number {
    const variacion = Math.floor(Math.random() * this.rango * 2) - this.rango; 
    return base + variacion;
  }

  barajarArray(array: number[]) {
    // Algoritmo de Fisher-Yates para barajar el array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }

  seleccionarValor(valor: number) {
    if (valor === this.resultado) {
      this.score++;
      if (this.score >= 50 && this.tiempoRestante > 0) {
        this.mostrarVictoria(); 
        return;
      }
    } else {
      this.vidas--;
      if (this.vidas === 0) {
        this.finalizarJuego();
      }
    }
    this.generarOperacion();
  }
  
  mostrarVictoria() {
    this.destroy$.next();
    this.destroy$.complete();
    this.router.navigate(['/ganar'],{ queryParams: { tiempo: this.tiempoRestante } });
  }
  

  finalizarJuego() {
    this.destroy$.next();
    this.destroy$.complete();
    this.router.navigate(['/fin-juego'], { queryParams: { score: this.score } });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
