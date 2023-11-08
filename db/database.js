const options = require("./knexfile.js")
// import * as knexPkg from 'knex';
// const { knex } = knexPkg.default;
const knex = require("knex")

// Assigns the connection config into the knex object
module.exports = knex(options)