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


//app.get - Método que registra uma rota http do tipo get
//'/' - rota raiz (home do servidor)
//(req,res) => {} - Função callback executada ao acessar a rota
//req - request - requisição - Recebe dados do server
//res - tesponse - resposta - Envia dados pro client
app.get('/', (req,res) => {
  //res.send() - Envia a resposta ao navegador
  // Será vista ao acessar http://localhost:portaconfigurada
  res.send("Olá Mundo!")
})

//app.listen() - Método de iniciliza o servidor HTTP pra escutar a porta definida
//Sem esse método o servidor não fica ativo e não aceita conexões.
//port - porta que o servidor irá escutar no caso 3000
//Assim o servidor ficará acessível em http://localhost:3000
//() => { console.log(...) } - Função callback executada quando o servidor iniciar com sucesso
app.listen(port, () => {
  //console.log() - Exibe uma mensagem no terminal
  console.log(`Servidor rodando em http://localhost:${port}`)
})
