# Node API RestFul

## Apresentação
<p>Esta é uma API baseada na arquitetura Rest utilizando Node.JS, Express, Postgres e Sequelize</p>

## Primeiro passo

   Organizamos as pastas que ficarão na Src de acordo com tudo que faremos durante o curso. Após toda organização, istalamos alguns pacotes para ajudar no desenvolvimento da API. Instalamos o Express (npm i express), Cors (npm i cors), Dotenv (npm i dotenv) e o Nodemon (npm i nodemon).

- Express nos ajudará a subir um server com node.js

- Cors ele garantirá que toda requisição feita para nossa API não seja recusada.
- Dotenv carrega automaticamente as variaveis de ambiente de um arquivo .env.

- Nodemon monitora a aplicação e garante que ela recarregue automaricamente sem precisar ficar subindo novamente a cada alteração.

## Segundo passo

- Criamos o "server.js, onde ali importamos as bibliotecas que nos auxiliarão no desenvolvimento da API. Iniciamos o Express com a constante "App" <code> const app = express();</code>, em seguida nela aplicamos o Cors <code> app.use(cors())</code>.

  Usamos o método "Use" para o Express onde declaramos que as solicitações chegarão no formato Json, onde colocamos um limite de 50mb para envitar sobrecarga no tráfego de dados. <code> app.use(express.json({limit:'50mb'}))</code> e por fim, informados ao "app" o método "Routes", que serão as rotas que criaremos em "routes.js".
  
  - No arquivo "app.js", importamos o a constante app que criamos em "server.js"  <p><code> const app = require('./src/config/server')</p></code>
   Também importamos as configurações de ambiente onde especificamos em qual porta nosso server estará. <p><code>const porta = process.env.PORTA </code></p>
 Por fim colocamos o app para "ouvir" a porta informada e devolver um log no console. <p><code>app.listen(porta, () => console.log('API esta na porta ' + porta))</code></p>

## Terceiro passo

- Criamos um arquivo nos controles que será responsável pelo controle dos métodos de requisição "usuarioController.js". Nele criamos uma classe chamada "usuarioController". Nela encontramos os métodos de requisiçaõ HTTP que vincualremos às solicitações nas rotas.

- Foi criado um arquivo onde armazenaremos nossas rotas, o "routes.js", onde nele também importamos o Express <p><code>const express = require('express');</code></p> logo após, criamos uma constante chamada "routes" que recebeu uma função do Express chamada "Router" <p><code>const routes = express.Router();</code></p>

- Importamos a classe "UsuarioController", criada em "usuarioController.js" <p><code>const UsuarioController = require('./src/controllers/UsuarioController');</code></p> Como é uma classe, precisamos instancia-la em uma variável/constante que chamaremos de "usuarioController" <p> <code>const usuarioController = new UsuarioController();</code></p>

- Começamos a incluir os métodos HTTP nas rotas, utilizando a constante criada anteriormente, "routes". <p><code>routes.post("/usuarios",usuarioController.login);</code></p>.
 _"/usuario"_ é uma request, ja o _"usuarioController"_ vem como uma Callback onde solicitamos um método pré criado no arquivo "UsuarioController.js".
  