import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'
@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {

  juego: JuegoPiedraPapelTijera;
  jugando: boolean;
  visualizarBoton: boolean;
  constructor() {

    this.juego = new JuegoPiedraPapelTijera();
    this.jugando = false;
    this.visualizarBoton = false;
   }

   ClickIntro(){

    this.jugando = true;
    this.NuevoJuego();
    this.juego.mensaje = "";
   }

   NuevoJuego(){
    this.juego.NuevoJuevo();
    this.visualizarBoton = false;

   }

   Verificar(seleccion :string){
     this.juego.seleccionJugador = seleccion;
     this.juego.verificar();
     
      this.visualizarBoton = true;

   }
  ngOnInit(): void {
  }

}
