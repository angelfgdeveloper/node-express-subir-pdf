const { response, request } = require('express');
const { Personal, User } = require('../models');

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


const acamidecPost = async(req = request, res = response) => {

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

    res.json({
      dataAcademic,
      msg: 'Todo bien',
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
  acamidecPost,
}