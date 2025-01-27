const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
   process.env.DATABASE,
   process.env.UNAME,
   process.env.PASSWORD,
   {
      host: process.env.HOST,
      dialect: 'mysql',
   }
);

const connectToDB = async () => {
   try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
   } catch (error) {
      console.error('Unable to connect to the database:', error);
   }
};

module.exports = { sequelize, connectToDB };
