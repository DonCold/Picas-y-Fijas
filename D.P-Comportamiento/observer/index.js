/*
    Ejemplo:
    La Empresa Z necesita comunicarle a las personas que deseen ser notificadas de los proximos post que realicen
    en alguna de las N paginas que maneja la empresa.
*/

import { Pagina } from './class/paginaWeb.js';
import { Cliente } from './class/cliente.js';

const pagina1 = new Pagina('De todito');
const pagina2 = new Pagina('Remix');

const sub1 = new Cliente( 'Pepito' );
const sub2 = new Cliente( 'Juan' );

pagina1.adjuntar(sub1);
pagina1.adjuntar(sub2);

pagina2.adjuntar(sub1);
pagina2.adjuntar(sub2);

pagina2.despegar(sub2);

pagina1.nuevoPost('Hola Mundo');
pagina2.nuevoPost('Hola Mundo 2')
