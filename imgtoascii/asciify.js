var asciify = require('asciify-image');

var options = {
  fit:'box',
  width: 25,
  height: 25,
  color: true
}

const imagen = async () => {
    const res = await asciify( 'https://media.giphy.com/media/CUe2pyv7sNUkM/giphy.gif', options ).catch( () => {
        return console.log( 'No se Pudo Imprimir la Imagen' );
    } );

    console.log( res );
}

imagen();
