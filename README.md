# API de Gerenciamento de Concessionária de Veículos
Esta é uma API construída com o objetivo de gerenciar uma concessionária de veículos, utilizando os princípios de Programação Orientada a Objetos (POO) e o banco de dados MongoDB através do framework Mongoose.

## Instalação
Para utilizar esta API em sua máquina local, você precisa ter o MongoDB instalado e configurado. Em seguida, siga as instruções abaixo:
* Clone este repositório para a sua máquina local
* Navegue até o diretório raiz do projeto
* Execute o comando ```npm install``` para instalar todas as dependências do projeto
* Execute o comando ```bash npm start``` para iniciar o servidor da API
## Endpoints
Esta API possui os seguintes endpoints:
* /cars	GET	Retorna uma lista de todos os carros cadastrados
* /cars/:id	GET	Retorna os detalhes de um carro específico
* /cars	POST	Adiciona um novo carro ao banco de dados
* /cars/:id	PUT	Atualiza as informações de um carro existente
* /cars/:id	DELETE	Remove um carro do banco de dados
* /motorcycles	GET	Retorna uma lista de todas as motos cadastrados
* /motorcycles/:id	GET	Retorna os detalhes de uma moto específica
* /motorcycles	POST	Adiciona uma nova moto ao banco de dados
* /motorcycles/:id	PUT	Atualiza as informações de uma moto existente
* /motorcycles/:id	DELETE	Remove uma moto do banco de dados
## Como utilizar
Você pode utilizar essa API através de um cliente REST, como o Postman ou Insomnia. Para cada endpoint, envie a requisição correspondente utilizando o método HTTP correto e os parâmetros necessários.

## Exemplo de requisição POST
```json
{
  "model": "Fusca",
  "year": 1969,
  "color": "white",
  "status": true,
  "buyValue": 3000,
  "doorsQty": 2,
  "seatsQty": 2,
}
```
