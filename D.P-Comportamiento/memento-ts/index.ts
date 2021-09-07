/*
    Ejemplo:
    Una empresa necesita guardar las actualizaciones que desee de su cuenta.
*/

import { Cuenta } from './class/cuenta.ts';
import { Historial } from './class/historial.ts';
import { EstadoActual } from './class/originator.ts';

const estadoActual = new EstadoActual();
const historial = new Historial();

let cuenta = new Cuenta(1, 'Pepito', 500000);
estadoActual.asignar(cuenta);

historial.agregar(estadoActual.guardar());

cuenta = new Cuenta(1, 'Juanito', 20000);

estadoActual.asignar(cuenta);
historial.agregar(estadoActual.guardar());


/* Viajando por el Historial */

estadoActual.restaurar(historial.obtenerHistorial(0)); // [0,1,2,3,4,5]

cuenta = estadoActual.verEstado();

cuenta.verInformacion();

estadoActual.restaurar(historial.obtenerHistorial(1));
cuenta = estadoActual.verEstado();

cuenta.verInformacion();
