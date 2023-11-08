const knex = require("./database")

async function insertarData(data){
    await knex("tos_google_ads").insert(data)
    console.log("Datos insertados exitosamente");
};

module.exports = insertarData;