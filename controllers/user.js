const { response, request } = require('express');
const { Personal, User, Academic, Posgraduate } = require('../models');

const personalPost = async(req = request, res = response) => {

  const { 
    motherLastName, lastName, name, dateOfBirth, gender, state, town, suburb, 
    street, numberHome, postalCode, telephone, cellphone, curp, rfc, nss
   } = req.body;
  
  try {

    const dataPersonal = { 
      motherLastName, lastName, name, dateOfBirth, gender, state, town, suburb, 
      street, numberHome, postalCode, telephone, cellphone, curp, rfc, nss,
      user: req.user._id,
      status: true
    }

    const personal = new Personal(dataPersonal);
    await personal.populate('user', 'email');

    // const user = await User.findById(req.user._id);
    // TODO: Grabar datos personales
  
    res.json({
      personal,
      // user
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Problema en el servidor - Comunicate con el Administrador'
    });
  }

}


const academicPost = async(req = request, res = response) => {

  const {  
    levelAcademic, institute, academicAdvance, startMonth, startYear, endMonth, 
    endYear, certificate, titleAchieved, identificationCard
   } = req.body;
  
  try {

    const dataAcademic = { 
      levelAcademic, institute, academicAdvance, startMonth, startYear, endMonth, 
      endYear, certificate, titleAchieved, identificationCard,
      user: req.user._id,
      status: true
    }

    const academic = new Academic(dataAcademic);
    await academic.populate('user', 'email');

    // TODO: Grabar academic 

    res.json({
      academic
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Problema en el servidor - Comunicate con el Administrador'
    });
  }

}

const posgraduatePost = async(req = request, res = response) => {

  const { state, total, posgraduates = [] } = req.body;

  try {

    // state - NO(0), YES(1), IN_PROCESS(2)
    // total - 1 hasta 4

    let dataPosgraduate = {};

    switch (state) {
      case 0: // NO
        dataPosgraduate = { 
          state, 
          user: req.user._id,
          status: true
        }
        break;
      case 1: // YES
        if (total >= 1 && total <= 4) {
          if (posgraduates.length != total) {
            return res.status(400).json({
              message: 'El total tiene que concordar con el total de posgrados asignados'
            });
          }

          posgraduates.forEach((p) => p.status = true);

          dataPosgraduate = { 
            state, 
            total,
            user: req.user._id,
            status: true,
            posgraduates: [ ...posgraduates]
          }

        } else {
          return res.status(400).json({
            message: 'Solo es disponible tener de 1 a máximo 4 posgrados'
          });
        }

        break;
      case 2: // IN_PROCESS
        if (posgraduates[0] == null) {
          return res.status(400).json({
            message: 'Se requiere del posgrado que esta en proceso'
          });
        }
        
        dataPosgraduate = { 
          state, 
          total: 1,
          user: req.user._id,
          status: true,
          posgraduates: [ posgraduates[0]]
        }
        break;
      default:
        return res.status(400).json({
          message: 'Tiene que seleccionar un estado existente - NO(0), YES(1), IN_PROCESS(2)'
        });
    }

    const posgraduate = new Posgraduate(dataPosgraduate);
    await posgraduate.populate('user', 'email');

    // TODO: Grabar el posgraduate 

    return res.status(201).json({
      posgraduate
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Problema en el servidor - Comunicate con el Administrador'
    });
  }

}

module.exports = {
  personalPost,
  academicPost,
  posgraduatePost,
}