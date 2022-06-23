import mongoose from 'mongoose';

const { MONGOCONNECTION } = process.env;

mongoose.connect( MONGOCONNECTION )
	.then( ( _db ) => console.log( `\n Base de Datos Conectada` ) )
	.catch( ( _err ) => console.log( `\n Error en la Base de Datos: ${ _err }` ) );

process.on( 'uncaughtException', () => {
	mongoose.connection.close();
	process.exit( 1 );
} );
