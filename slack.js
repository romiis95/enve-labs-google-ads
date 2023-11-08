const axios = require('axios');

function enviarMensajeASlack(messageData){
  const slackWebhookUrl = 'https://hooks.slack.com/services/TU_WEBHOOK_URL';

  axios.post(slackWebhookUrl, messageData)
      .then(response => {
        console.log('Mensaje enviado exitosamente a Slack');
      })
      .catch(slackError => {
        console.error('Error al enviar el mensaje a Slack:', slackError);
      });
}  


module.exports = enviarMensajeASlack;