import Discord from 'discord.js';
import Jimp from 'jimp';

const client = new Discord.Client();

const fuentePre = './fuente/fuente.fnt';
const wallpaper = 'https://i.imgur.com/H80vUGI.png';
const circular = 'https://i.imgur.com/2mGwOGh.png';
const marco = 'https://i.imgur.com/KKgVrcU.png';

const tamanioText = ( font, text ) => {
    let x = 0;
    for (let i = 0; i < text.length; i++) {
        if(font.chars[text[i]]) {
            x += font.chars[text[i]].xoffset
            + (font.kernings[text[i]] && font.kernings[text[i]][text[i+1]] ? font.kernings[text[i]][text[i+1]] : 0)
            + (font.chars[text[i]].xadvance || 0);
        }
    }
    return x;
}

const loadJimp = async ( msg ) => {

    const user = msg.author.displayAvatarURL( { format: 'png' } );
    const name = msg.author.username;

    const image = await Jimp.read( wallpaper ).catch(() => {
        console.log( 'A ocurrido un error: 520' );
    });

    image.resize(600, 300);

    const maskCir = await Jimp.read( circular ).catch(() => {
        console.log( 'A ocurrido un error: 500' );
    });
    const photo = await Jimp.read( user ).catch(() => {
        console.log( 'A ocurrido un error: 500' );
    });
    const marcoJimp = await Jimp.read( marco ).catch(() => {
        console.log( 'A ocurrido un error: 500' );
    });
    maskCir.resize(200, 200);
    photo.resize(200, 200);
    marcoJimp.resize(250, 250);

    photo.mask(maskCir, 0, 0);
    image.composite(photo, 50, 50);
    image.composite(marcoJimp, 20, 20);

    const fuente = await Jimp.loadFont( fuentePre ).catch(() => {
        console.log( 'A ocurrido un error: 510' );
    });

    const textAncho = tamanioText(fuente, name);
    const ancho = 445 - (textAncho/2);

    image.print(fuente, ancho, 150, name);

    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG).catch(() => {
        console.log( 'A ocurrido un error: 530' );
    });

    const att = new Discord.MessageAttachment( buffer, 'prueba.jpg');

    msg.channel.send( att );
    msg.delete();
}

/* ========================================================================================== */

client.on( 'message', async ( msg ) => {
    if ( msg.content.startsWith( '//message' ) ) {
        loadJimp( msg );
    }
} );

client.on( 'ready', async () => {
    console.log( 'Bot Listo' );
} );

client.login( '' );
