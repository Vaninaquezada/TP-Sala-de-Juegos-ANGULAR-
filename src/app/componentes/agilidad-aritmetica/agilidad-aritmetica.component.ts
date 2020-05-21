import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  jugando: boolean;
  Tiempo: number;
  repetidor:any;
  Mensajes:string;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.jugando=false;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    this.nuevoJuego.gano = false;
    this.jugando=false;

    console.log("jugando " + this.jugando);
    this.ocultarVerificar=false;
    this.nuevoJuego.NuevoJuego();

    console.log("Respuesta " + this.nuevoJuego.resultado);

    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();

        
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);
      this.Tiempo=5;
      
  }
  verificar()
  {
    this.jugando=false;



    this.ocultarVerificar=true;
    
    clearInterval(this.repetidor);
    if (this.nuevoJuego.verificar()){
      

      this.enviarJuego.emit(this.nuevoJuego);
      

      this.MostarMensaje("Sos un Genio!!!",true);


    }
    this.jugando=true;
      this.MostarMensaje("Perdiste!!",false);
      this.ocultarVerificar=true;
    
      
    }
    
  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    

    var modelo=this;
    setTimeout(function(){ 
   
      modelo.ocultarVerificar=false;
     }, 3000);
   
  
  }

}
