const mongoose = require('mongoose');

const dbConnection = async() => {

  try {

    await mongoose.connect( process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('Base de datos online');
    
  } catch (err) {
    console.log(err);
    throw new Error('Error en la hora de inicializar la base de datos');
  }

}

module.exports = {
  dbConnection
}