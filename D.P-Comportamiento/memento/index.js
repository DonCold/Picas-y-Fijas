/*
    Ejemplo:
    Una empresa necesita tener una Opcion para guardar en el historial las actualizaciones que tenga su Cuenta.
*/

import { Historial } from './class/historial.js';
import { EstadoActual } from './class/originator.js';

import { Cuenta } from './class/cuenta.js';

const estadoActual = new EstadoActual();
const historial = new Historial();

let cuenta = new Cuenta(1, 'Pepito', 500000, '24/04/2021');
estadoActual.asignar(cuenta);

historial.agregar(estadoActual.guardar());

cuenta = new Cuenta(1, 'Pepito', 20000, '28/04/2021');

estadoActual.asignar(cuenta);
historial.agregar(estadoActual.guardar());

/* Viajando por el Historial */

estadoActual.restaurar(historial.obtenerHistorial(1)); // [0,1,2,3,4,5]
cuenta = estadoActual.verEstado();
cuenta.verInformacion();

estadoActual.restaurar(historial.obtenerHistorial(0));
cuenta = estadoActual.verEstado();
cuenta.verInformacion();
