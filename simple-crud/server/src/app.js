import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();
const app = express();

app.set( 'port', process.env.PORT || 8000 );

app.use( cors() );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( routes );

export default app;
