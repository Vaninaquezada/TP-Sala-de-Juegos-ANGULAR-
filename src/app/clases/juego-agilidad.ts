
import { Juego } from '../clases/juego'
export class JuegoAgilidad extends Juego {

    numeroIngresado: number;
    resultado: number;
    operador: string;
    numeroUno: number;
    numeroDos: number;
    mensaje: string;
    operadores: Array<string>;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Adivina el número", gano, jugador);
        this.InicializaCero();
        this.operadores = ["+","-","*","/"];
        
    }

    public Calcular() {

        switch (this.operador) {
            case "+":
                this.resultado = Math.round(this.numeroUno + this.numeroDos);
                break;
            case "-":
                this.resultado = Math.round(this.numeroUno - this.numeroDos);
                break;
            case "*":
                this.resultado = Math.round(this.numeroUno * this.numeroDos);
                break;
            case "/":
                this.resultado = Math.round(this.numeroUno / this.numeroDos);
                break;
            default:
                this.mensaje = this.operador +" no es un perador valido";
                break;
        }
    }
    public verificar(): boolean {
        if (this.numeroIngresado == this.resultado ) {
            this.gano = true;
          }
          if (this.gano) {
            return true;
          } else {
            return false;
          }
    }

    public AsignarNumeroUno(){
        this.numeroUno = Math.floor((Math.random() * 100) + 1);
    }
    public AsignarNumeroDos(){
        this.numeroDos = Math.floor((Math.random() * 100) + 1);
    }
    public AsignarOperador(){
       let index = Math.floor(Math.random() * (4 - 1)) + 1;
       this.operador = this.operadores[index];
    }

    public NuevoJuego(){
        this.AsignarNumeroUno();
        this.AsignarNumeroDos();
        this.AsignarOperador();
        this.Calcular();


       
    }
    public InicializaCero(){

        this.numeroIngresado = 0;
        this.resultado = 0;
        this.numeroUno = 0;
        this.numeroDos = 0;
        this.operador= "";
    }
}
