# jitterbit-order-api test

This test is a step in the jitterbit "Analista de Sistemas Jr" role application job and it works as an orders API using express + mongoose and Postman (easier for testing).

## How to use

1. [NodeJS](https://nodejs.org/en/download) and [MongoDB](https://www.mongodb.com/try/download/community) are required to be installed.

2. Clone the repository with `git clone https://github.com/gaalisboa/jitterbit-order-api`.

3. Run `npm -i` to install the dependencies.

4. Run `npm run dev` to start the API (check the console to see if the API is running and MongoDB was connected successfully).

5. Test with Postman/Insomnia (you can use curl if you want).

### Post Request Model

URL: http://localhost:3000/order

Method: POST

Data: 
```
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```
