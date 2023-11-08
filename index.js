const{
    obtenerTokenAcceso,
    obtenerPublicidades,
    reorganizarData,
}= require("./google-ads")

const insertarData = require("./db/insert")
const cron = require("node-cron")
const enviarMensajeASlack = require("./slack")
async function comenzarProceso(){
  try {
    const accessToken = await obtenerTokenAcceso();
    const publicidades = await obtenerPublicidades(accessToken);
    const data = await reorganizarData(publicidades);
    await insertarData(data);
    console.log('Proceso completado con éxito');
  } catch (error) {
    const errorMessage = `Se ha producido un error: ${error.message}`;
    console.error(errorMessage);
    enviarMensajeASlack(errorMessage);
  } 
}
  cron.schedule('*/5 * * * *', async () => {
  comenzarProceso();
});
comenzarProceso();