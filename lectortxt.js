const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error leyendo el archivo: /n', err);
        return;
    }
    console.log('Contenido del archivo:', data);
});