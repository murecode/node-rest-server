import mongoose from 'mongoose'; 
mongoose.set('strictQuery', false);

const dbConn = async () => {

  try {
    mongoose.connect(process.env.MONGODB_CNN, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    }); 

    console.log('Conectado DB');

  } catch (error) {
    console.log(error)
    throw new Error('Error al conectarse a DB');
  }

};

export default dbConn;

