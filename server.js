//require('express') - importacao do framework
//const express - variavel pra armazenar essa importação
const express = require('express')

// express() - Executando a função express
// const app - Criação da instancia do app e assim, representação do servidor
//Através da app vamos configurar rotas, middlewares e etc
const app = express()

//3000 - Valor da porta no localhost
//const port - Criação da instancia da porta pra que depois possa ser acessada
const port = 3000


//app.get - Define uma rota http do tipo get
//'/' - rota raiz (home do servidor)
//(req,res) => {} - Função callback executada ao acessar a rota
//req - request - requisição - Recebe dados do server
//res - tesponse - resposta - Envia dados pro client
app.get('/', (req,res) => {
  //res.send() - Envia a resposta ao navegador
  // Será vista ao acessar http://localhost:portaconfigurada
  res.send("Olá Mundo!")
})
