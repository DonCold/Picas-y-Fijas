import Discord from 'discord.js';
import Jimp from 'jimp';

const client = new Discord.Client();

const loadJimp = async ( msg ) => {
    const image = await Jimp.read( msg.content[0].trim() ).catch(() => {
        console.log( 'A ocurrido un error: 520' );
    });
    let fuente;

    image.resize(250, 250);
    if ( msg.content[2] ) {
        fuente = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).catch(() => {
            console.log( 'A ocurrido un error: 510' );
        });
    } else {
        fuente = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).catch(() => {
            console.log( 'A ocurrido un error: 510' );
        });
    }

    image.print(fuente, 50, 50, msg.content[1], 150);

    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG).catch(() => {
        console.log( 'A ocurrido un error: 530' );
    });

    const att = new Discord.MessageAttachment( buffer, 'prueba.jpg');

    msg.channel.send( att );
    msg.delete();
}

client.on( 'message', async ( msg ) => {
    if ( msg.content.startsWith( '//profile' ) ) {
        msg.content = msg.content.slice( 9 ).trim();
        msg.content = msg.content.split( '<>' );

        loadJimp( msg );
    }
});

client.on( 'ready', async () => {
    console.log( 'Bot Listo' );
} );

client.login( '' );
