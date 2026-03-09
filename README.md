# Jitterbit Order API

API simples desenvolvida em **Node.js** para gerenciamento de pedidos, permitindo criar, consultar, atualizar e remover pedidos.

Este projeto foi desenvolvido como parte de um teste técnico.

---

# Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Postman (para testes da API)
* JsonWebToken

---

# Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/jitterbit-order-api.git
cd jitterbit-order-api
```

## 2. Instalar dependências

```bash
npm install
```

## 3. Executar a API

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3000
```

---

# Endpoints da API

## Criar pedido

POST

```
/order
```

### Body

```json
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

---

## Autenticação

A API utiliza autenticação baseada em JWT.

POST

```
/auth/login
```

### Body
```json
{
 "username": "admin",
 "password": "1234"
}
```

Após autenticação, o token retornado deve ser enviado no header
`Authorization: Bearer [TOKEN]`

## Buscar pedido

GET

```
/order/:orderId
```

Exemplo:

```
/order/v10089015vdb-01
```

---

## Listar pedidos

GET

```
/order/list
```

---

## Atualizar pedido

PUT

```
/order/:orderId
```

---

## Deletar pedido

DELETE

```
/order/:orderId
```

---

# Transformação de dados

A API realiza um **mapping dos campos recebidos** antes de salvar no banco de dados.

Formato recebido:

```json
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

Formato armazenado:

```json
{
  "orderId": "v10089015vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

# Testes da API

A API pode ser testada utilizando o **Postman**.

Uma collection de testes está disponível no diretório:

```
/docs/postman_collection.json
```

---
