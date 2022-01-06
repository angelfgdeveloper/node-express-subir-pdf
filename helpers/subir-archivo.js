const path = require('path');
const { v4: uuidv4 } = require('uuid');

const subirArchivo = (files, extensionesValidas = ['pdf'], carpeta = '' ) => {

  return new Promise( (resolve, reject) => {

    const { archivo } = files;

    const nombreCortado = archivo.name.split('.');
    const extension = nombreCortado[ nombreCortado.length - 1 ];
  
    // Válidar la extension
    // const extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'];
    if ( !extensionesValidas.includes(extension) ) {
      return reject(`La extensión ${ extension } no es permitida - ${ extensionesValidas }`);
      // return res.status(400).json({
      //   msg: `La extensión ${ extension } no es permitida, ${ extensionesValidas }`
      // });
    }
  
    const nombreTemp = uuidv4() + '.' + extension;
    const uploadPath = path.join( __dirname, '../uploads/', carpeta, nombreTemp );
  
    archivo.mv(uploadPath, (err) => {
      if (err) {
        reject(err);
      }

      resolve(nombreTemp);
  
    //   res.json({
    //     msg: 'File uploaded to ' + uploadPath
    //   });
    });

  });

}


module.exports = {
  subirArchivo
}