import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  ocultarVerificar: boolean;
  Tiempo: number;
  contador: number;
  Mensajes:string;
  randomArray: number;
  repetidor:any;
  juego: JuegoAnagrama = new JuegoAnagrama();
  palabraGanadora:string;
  palabraIngresada:string;
  palabraMezclada:string;
  constructor() {
    this.ocultarVerificar=true;
     this.juego = new JuegoAnagrama();
   
  }

  ngOnInit() {

   console.log(this.juego.palabraSecreta);

  }

  verificar()
  {
    this.contador++;
    console.info("numero Secreto:",this.juego.gano);  
    if (this.juego.verificar()){
      
      
      this.MostarMensaje("Sos un Genio!!!",true);
      this.ocultarVerificar=true;

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo, Te quedan 3 oportunidades";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
            mensaje="No era   "+this.juego.palabraIngresada + ". Ultima oportunidad. ";
          break;
              
        default:
          mensaje ="";
          this.MostarMensaje("Perdiste!!", false);
          this.ocultarVerificar=true;
          break;
      }
      if (!this.ocultarVerificar){   
           this.MostarMensaje("#"+this.contador+" "+ mensaje);
      }
     

    }
    console.info("palabra secreta:",this.juego.gano);  
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
    
     }, 3000);
    console.info("objeto",x);
  
   }  

  NuevoJuego() 
  {

    this.contador=0;
    this.juego.nuevaPalabra();
    this.juego.mezclarpalabra(this.juego.palabraSecreta);

    this.palabraMezclada = this.juego.palabraDesordebada;
    this.ocultarVerificar=false;
    this.MostarMensaje("Tenes 4 oportunidades para adivinar la palabra.", false);
    console.log(this.juego.palabraSecreta);
  }


}
