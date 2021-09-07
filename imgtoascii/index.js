const getAsciiImage = require('get-ascii-image');

const config = {
    maxWidth:50,
    maxHeight:50,
    avoidedCharacters: ["#", "a"],
};

const imagen = async () => {
    const res = await getAsciiImage( 'https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg', config );

    console.log( res );
}

imagen();
