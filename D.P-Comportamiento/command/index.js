/*
    Ejemplo:
    Somos la Tienda N, necesitamos un programa que nos permita ir agregando las diferentes acciones que realizan los usuarios
    dentro de nuestro local, tales como: compra y devolución de un Producto.
    Y que el programa nos vaya mostrando el flujo de dinero de estas personas.
*/

import { Invoker } from './lib/ejecutar.js';

import { Cliente } from './cliente.js';
import { Comprar, Devolucion, Productos } from './commands/acciones.js';

const cliente1 = new Cliente(1, 'Juan', 50000);

/* Se Inicializan los comandos */
const compra1 = new Comprar(cliente1, 'Manzana', 2000);
const compra2 = new Comprar(cliente1, 'Pera', 2800);
const verProductos1 = new Productos(cliente1);
const devolucion1 = new Devolucion(cliente1, 'Manzana', 2000);

const invoker = new Invoker();

/* Se Agregan los comandos a la pila */
invoker.recibirOperacion(compra1);
invoker.recibirOperacion(compra2);
invoker.recibirOperacion(verProductos1);
invoker.recibirOperacion(devolucion1);

/* Se ejecutan los comandos */
invoker.realizarOperaciones();
