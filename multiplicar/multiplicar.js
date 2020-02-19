const fs = require('fs');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor instroducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor instroducido ${limite} no es un numero o es menor a ${base}`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            // console.log(`${ base } * ${ i } = ${base * i}`);
            data += `${ base } * ${ i } = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla${base}.txt`);
            // console.log(`El archivo tabla-${base} ha sido creado`);
        });
    });
}

let listarTabla = (base, limite) => {
    let data = '';
    if (!Number(base)) {
        reject(`El valor instroducido ${base} no es un numero`);
        return;
    }

    if (!Number(limite) && limite > base) {
        reject(`El valor instroducido ${limite} no es un numero o es menor a ${base}`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}`);
        // data += `${ base } * ${ i } = ${base * i}\n`
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}