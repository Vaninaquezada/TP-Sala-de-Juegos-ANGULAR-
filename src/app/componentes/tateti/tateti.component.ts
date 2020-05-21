import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from '../../clases/tateti'
@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  clase1: string;
  clase2: string;
  clase3: string;
  clase4: string;
  clase5: string;
  clase6: string;
  clase7: string;
  clase8: string;
  clase9: string;
  juego: JuegoTateti;
  mensaje: string;
  claseContainer: string;
  claseMensaje: string;
  cellElements: any;
  listaclases: Array<string>;
  ocultarVerificar: boolean;


  constructor() {
    this.juego = new JuegoTateti();
    this.listaclases = [];
    this.ocultarVerificar = false;
  }

  ngOnInit(): void {

    this.CuadraditoHover();
    this.cellElements = document.querySelectorAll('[data-cell]');

    this.ocultarVerificar = false;
  }

  Jugar(cuadradito: number) {

    this.MarcarJugada(cuadradito);
    once: true;
    this.juego.claseActual = this.juego.turnoCirculo ? this.juego.o : this.juego.x;

    console.log("Clase actual " + this.juego.claseActual);

    console.log("verificar " + this.VerificarJugada());
    if (this.VerificarJugada()) {

      this.FinalizarJuego(false);
    } else if (this.EsEmpate()) {
      this.FinalizarJuego(true);

    } else {

      this.juego.CambiarTurno();
      this.CuadraditoHover();
      console.log("turno " + this.juego.turnoCirculo);
    }
    console.log("Gano"+this.mensaje);
  }

  CuadraditoHover() {

    console.log(this.juego.turnoCirculo);
    if (this.juego.turnoCirculo) {
      this.claseContainer = this.juego.o;

    } else {
      this.claseContainer = this.juego.x;

    }

  }


  FinalizarJuego(empate) {
    if (empate) {
      this.mensaje = 'Empate!'
    } else {

      this.mensaje = this.juego.turnoCirculo ? "O " : "X " + 'Gano!';

    }
    this.claseMensaje = 'show';
    console.log(this.mensaje);
  }

  VerificarJugada() {

    return this.juego.combinaciones.some(conbinacion => {
      return conbinacion.every(index => {
        console.log(index);

        console.log(this.juego.claseActual.toString());
        console.log(this.ocultarVerificar);
        console.log("lista " + this.listaclases);
        console.log("valida" + this.listaclases[index] == this.juego.claseActual.toString())

        return this.listaclases[index] == this.juego.claseActual.toString();
      })
    })


  }


  EsEmpate() {
    return [...this.listaclases].every(cell => {
      return cell == this.juego.x || cell == this.juego.o;
    })
  }

  MarcarJugada(cuadradito: number) {

    console.log(cuadradito);
    switch (cuadradito) {
      case 1:
        if (this.clase1 == null) {

          this.clase1 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[0] = this.clase1;
        }

        break;
      case 2:
        if (this.clase2 == null) {
          this.clase2 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[1] = this.clase2;
        }
        break;
      case 3:
        if (this.clase3 == null) {
          this.clase3 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[2] = this.clase3;
        }
        break;
      case 4:
        if (this.clase4 == null) {
          this.clase4 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[3] = this.clase4;
        }
        break;
      case 5:
        if (this.clase5 == null) {
          this.clase5 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[4] = this.clase5;
        }
        break;
      case 6:
        if (this.clase6 == null) {
          this.clase6 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[5] = this.clase6;
        }
        break;
      case 7:
        if (this.clase7 == null) {
          this.clase7 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[6] = this.clase7;
        }
        break;
      case 8:
        if (this.clase8 == null) {
          this.clase8 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[7] = this.clase8;
        }
        break;
      case 9:
        if (this.clase9 == null) {
          this.clase9 = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
          this.listaclases[8] = this.clase9;
        }
        break;
      default:
        break;
    }


  }

}
