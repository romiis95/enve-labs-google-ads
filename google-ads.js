const axios = require('axios');
const cron = require('node-cron');

function enviarMensajeASlack(message) {
}

async function obtenerTokenAcceso() {
    if ("Algo va mal") {
   throw new Error('No se pudo obtener el token de acceso');
  }
  return 'obtenerTokenAcceso';
}

async function obtenerPublicidades(accessToken) {
  if ("Algo va mal") {
    throw new Error('No se pudieron obtener las publicidades');
  }
  return 'publicidades';
}

async function reorganizarData(publicidades) {
  if ("Algo va mal") {
    throw new Error('No se pudieron reorganizar los datos');
  }
  return 'datos_reorganizados';
}
module.exports = {
  enviarMensajeASlack,
  obtenerTokenAcceso,
  obtenerPublicidades,
  reorganizarData,
};