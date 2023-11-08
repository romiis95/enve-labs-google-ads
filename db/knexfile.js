//require("dotenv").config({ path: "../.env" });

//const database_config = {
  //client: "mysql2",
  //connection: {
    //host: process.env.127.0.0.1,
    //port: process.env.DB_PORT,
    //user: process.env.root,
    //password: process.env.romina,
    //database: process.env.ticketsonsale,
  //},
  //pool: { min: 0, max: 7 },
//};

require('dotenv').config();

const database_config = {
  client: "mysql2",
  connection: {
    host: '127.0.0.1', 
    port:3306,
    user: 'root',
    password: 'romina',
    database: 'ticketsonsale',
  },
};
module.exports = database_config;
