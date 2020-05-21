
import { Juego } from '../clases/juego'

export class JuegoAnagrama extends  Juego {
    numeroRandom: number = 0;
    palabraIngresada: string;
    palabraSecreta: string;
    palabraDesordebada: string;
    palabras : Array<any> = [];
    a: Array<any> = [];
    n: number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
        this.palabraIngresada="";
        this.palabraSecreta="";
        this.palabraDesordebada="";
        this.palabras.push('PESADILLA');
        this.palabras.push("FACULTAD");
        this.palabras.push("LIBRO");
        this.palabras.push("COCO");
        this.palabras.push("CHOCOLATE");
        this.palabras.push("MANZANA");
        this.palabras.push("JUEGO");
        this.palabras.push("CANCION");
        this.palabras.push("VIOLETA");
        this.palabras.push("COLOR");
    
      this.nuevaPalabra();
        this.mezclarpalabra(this.palabraSecreta);
      }

    public verificar() {

        this.palabraIngresada = this.palabraIngresada.toUpperCase();

        if (this.palabraIngresada == this.palabraSecreta) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }

     public nuevaPalabra(){

        this.generarnumero();
        this.palabraSecreta = this.palabras[this.numeroRandom];

     }
     public generarnumero() {
        this.numeroRandom= Math.floor(Math.random() * (10 - 1)) + 1;
        console.info('numero random:' + this.numeroRandom);
        this.gano = false;
      }


      public mezclarpalabra(palabra : string){

        this.a = palabra.split("");
        this.n = this.a.length; 
        for (let index = this.n - 1; index > 0; index--) {
 
            let j = Math.floor(Math.random() * (index+ 1));
            let tmp = this.a[index];
            this.a[index] = this.a[j];
            this.a[j] = tmp;
        }
        this.palabraDesordebada = this.a.join("");
      }


   /*   public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
          return "Falta";
        }
        return "Te pasate";
      }
      */



}
