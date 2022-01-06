const { response } = require('express');
const { subirArchivo } = require('../helpers');

const cargarArchivo = async(req, res = response) => {

  // if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
  //   res.status(400).json({
  //     msg: 'No hay archivos que subir'
  //   });
  //   return;
  // }

  try {
    // Imágenes ó txt, md
    // const nombre = await subirArchivo( req.files, ['txt', 'md'], 'textos' );
    const nombre = await subirArchivo( req.files, undefined, 'curriculums' );
    res.json({ nombre });
    
  } catch (msg) {
    res.status(400).json({
      msg
    });
  }

}

module.exports = {
  cargarArchivo
}