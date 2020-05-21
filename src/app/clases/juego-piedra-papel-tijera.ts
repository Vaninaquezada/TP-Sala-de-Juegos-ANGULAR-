import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego{
  
    seleccionJugador: string;
    seleccionCompu: string;
    mensaje: string;
    index:number;
    opciones: Array<string>;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Adivina el número", gano, jugador);
        this.InicializaCero();
        this.opciones = ["piedra","papel","tijera"];
        
    }
    public verificar(): boolean {
        if (this.ValidaResultado() ) {
            this.gano = true;
          }
          if (this.gano) {
            return true;
          } else {
            return false;
          }
    }


    public ValidaResultado(): boolean{
        if (this.seleccionJugador === this.seleccionCompu) {
            this.mensaje = "Empate!!";
            return false;
          }
          //Check for piedra
          if (this.seleccionJugador === "piedra") {
            if (this.seleccionCompu === "tijera") {
                this.mensaje = "Ganaste!!";
                
                return false;
            } else {
                this.mensaje = "Perdistes. Te gano la compu";
              return true;
            }
          }
          //Check for papel
          if (this.seleccionJugador === "papel") {
            if (this.seleccionCompu === "tijera") {
                this.mensaje = "Perdistes. Te gano la compu";
              return false;
            } else {
              this.mensaje = "Ganaste!!";
              return true;
            }
          }
          //Check for tijera
          if (this.seleccionJugador === "tijera") {
            if (this.seleccionCompu === "piedra") {
              this.mensaje = "Perdistes. Te gano la compu";
              return false;
            } else {
              this.mensaje = "Ganaste!!";

              return true;
            }
          }
        
        return false;


    }
    NuevoJuevo(){
        this.InicializaCero();
        this.SeleccionComputadora();
    }

    public InicializaCero(){
        this.seleccionJugador= "";
        this.seleccionCompu= "";
        this.mensaje= "Inicia un nuevo juego de <brs> Piedra Papel Tejera";

    }

    public SeleccionComputadora(){

        this.index = Math.floor((Math.random() * 3));
        this.seleccionCompu = this.opciones[this.index] ;
    }
}
