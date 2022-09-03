const app = require('./src/config/server'); // aqui estamos importando o app que criamos la no server.js
const porta = process.env.PORTA; // aqui estamos importando as configurações ja pré definidas globalmente no arquivo .env (nesse caso configuramos somente a porta)

app.listen(porta, () => console.log('API esta na porta ' + porta)); // Colocamos o app para ouvir a porta e com uma arrow function, 
                                                                      //mandamos um log para o console informando que a API esta rodando
                                                                      //e rodando na porta que pré definimos
                                                                       
