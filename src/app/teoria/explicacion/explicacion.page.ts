import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-explicacion',
  templateUrl: './explicacion.page.html',
  styleUrls: ['./explicacion.page.scss'],
})
export class ExplicacionPage implements OnInit {
  tipoOperacion: string = '';
  imagenes: string = '';
  explicacion: string = '';
  ejemplo: string='';
  imagenEjemplo: string='';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipoOperacion = params['tipo'];
      this.setExplicacion();
    });
  }

  setExplicacion() {
    switch (this.tipoOperacion) {
      case 'suma':
        this.explicacion = 'Imagina que tienes 1 manzana y tu amigo te da 1 manzana más. ¿Cuántas manzanas tienes en total? Para saberlo, usamos la suma. Sumar es como juntar cosas para ver cuántas hay en total.';
        this.imagenes = 'assets/imagenes/ejeSum.png';
        this.ejemplo='En vez de manzanas, podemos usar números. Si tienes 4 manzanas y le sumas 2 manzanas, podemos escribirlo así: 4 + 2 = 6 El signo "+" significa "más" y nos indica que estamos juntando los números. El signo "=" significa "igual" y nos muestra el resultado final.';
        this.imagenEjemplo='assets/imagenes/ejeSum2.png';
        break;
      case 'resta':
        this.explicacion = 'Imagina que tienes 4 manzanas y le das 1 a tu hermano. ¿Cuántas manzanas te quedan? Para saberlo, usamos la resta. Restar es como quitar cosas de un grupo para saber cuántas quedan.';
        this.imagenes = 'assets/imagenes/ejeRes.png';
        this.ejemplo='En vez de manzanas, podemos usar números. Si tenías 7 manzanas y le quitaste 3, podemos escribirlo así: 7 - 3 = 4 El signo "-" significa "menos" y nos indica que estamos quitando un número. El signo "=" significa "igual" y nos muestra el resultado final.';
        this.imagenEjemplo='assets/imagenes/ejeRes2.png';
        break;
      case 'multiplicacion':
        this.explicacion = 'Imagina que tienes 3 bolsas de cerezas y en cada bolsa hay 2 cerezas. ¿Cuántas cerezas tienes en total? Para saberlo, usamos la multiplicación. Multiplicar es como sumar varias veces el mismo número.';
        this.imagenes = 'assets/imagenes/ejeMult.png';
        this.ejemplo='En vez de bolsas y manzanas, podemos usar números. Si tienes 4 bolsas y en cada una hay 3 manzanas, podemos escribirlo así: 4 x 3 = 12 El signo "x" significa "multiplicado por" y nos indica que estamos repitiendo un número varias veces. El signo "=" significa "igual" y nos muestra el resultado final.';
        this.imagenEjemplo='assets/imagenes/ejeMult2.png';
        break;
      case 'division':
        this.explicacion = 'Imagina que tienes 12 galletas y quieres repartirlas entre 3 amigos. ¿Cuántas galletas le toca a cada uno? Para saberlo, usamos la división. Dividir es como repartir algo en partes iguales.';
        this.imagenes = 'assets/imagenes/ejeDiv.png';
        this.ejemplo='En vez de melocotones y amigos, podemos usar números. Si tienes 20 melocotones y 4 amigos, podemos escribirlo así: 20 ÷ 4 = 5 El signo "÷" significa "dividido entre" y nos indica que estamos repartiendo un número en partes iguales. El signo "=" significa "igual" y nos muestra el resultado final. ';
        this.imagenEjemplo='assets/imagenes/ejeDiv2.png';
        break;
      default:
        this.explicacion = 'Selecciona una operación para ver la explicación.';
    }
  }

  goToOperaciones(operacion: string) {
    this.router.navigate(['/practica/operaciones'], { queryParams: { tipo: operacion } });
  }
}
