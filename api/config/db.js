const mongoose = require('mongoose');

const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DB_URL) // No options needed here
    .then(() => console.log('DB connected successfully'))
    .catch((err) => {
      console.log('DB connection failed');
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;
