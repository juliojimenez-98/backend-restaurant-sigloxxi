const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //admin
    //Zxy8lHMBymODg7Bc

    //user
    //qxMGTvM0BO4FYOsz

    console.log("BBDD Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la bbdd");
  }
};

module.exports = {
  dbConnection,
};
