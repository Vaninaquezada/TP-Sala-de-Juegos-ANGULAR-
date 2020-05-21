import { Juego } from '../clases/juego'

export class JuegoTateti extends Juego {
    combinaciones: Array<any>;
    x:string;
    o:string;
    claseActual:string;
    turnoCirculo: boolean;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("TaTeTi",gano,jugador);
        this.turnoCirculo= false;
        this.claseActual=this.x ;

        this.x = 'x';
        this.o = 'o';
        this.combinaciones = [
                                [0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8],
                                [0, 4, 8],
                                [2, 4, 6]
                            ]
        
        
      }
     public CambiarTurno(){
            this.turnoCirculo = !this.turnoCirculo;
        }

    public verificar(): boolean {


return true;
    }



}
