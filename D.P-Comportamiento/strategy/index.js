/*
    Ejemplo:
    Un cliente desea que realicemos un "videojuego" donde se puedan simular diferentes armas y se pueda interactuar(Atacar) con ellas.
*/
import { Jugador } from './class/jugador.js';
import { Espada, Cuchillo, Pistola } from './class/armas.js';

const jugador1 = new Jugador('Juanito');
const jugador2 = new Jugador('Pepito');

jugador1.seleccionarArma(new Espada(80));
jugador1.atacar();
jugador2.seleccionarArma(new Cuchillo(150));
jugador2.atacar();
jugador2.seleccionarArma(new Pistola(200));
jugador2.atacar();
