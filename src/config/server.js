require ('dotenv').config(); // DIFERENTE DO JS, NODE PARA IMPORTAR NÃO UTILIZA O METODO IMPORT E SIM O REQUIRE!!!!

const express = require('express'); // importando as bibliotecas que foram instaladas
const cors = require('cors'); // importando as bibliotecas que foram instaladas
const routes = require('../../routes'); // Aqui estamos importando a rota criada em routes.js

const app = express(); // iniciando a aplicação com o express
app.use(cors()); // serve para quando for fazer a requisição para a API, a APi não recuse a requisição no meio do caminho (deixa qualquer um fazer a requisição)
app.use(express.json({limit:'50mb'})); // aqui diz que toda api que seja requisitada, venha como JSON e com um limite de 50mb no maximo, evitar trafegar muitos dados
app.use(routes); // Aqui estamos dizendo para o App utilizar as rotas que criamos.

module.exports = app; // aqui estamos exportando o app que configuramos. 