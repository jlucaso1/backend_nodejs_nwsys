<h1 align="center" >Back End para a Prova NWSYS</h1>

## Tecnologias

- Typescript
- NestJS a framework of NodeJS
- Docker
- Postgresql

## Instalação

```bash
# instalar dependências
$ npm install ou yarn
```

## Rodando a aplicação

```bash
# modo de desenvolvimento
$ npm run start:dev ou yarn start:dev

# rodar a api em desenvolvimento e o banco de dados com o docker-compose
$ docker compose up
```

## Endpoints
- <p>GetAllProducts (GET): http://localhost:3000/manager/products</p>
- <p>GetProduct (GET): http://localhost:3000/manager/product/:id</p>
- <p>CreateProduct (POST): http://localhost:3000/manager/product</p>
- <p>UpdateProduct (PUT): http://localhost:3000/manager/product/:id</p>
- <p>DeleteProduct (Delete): http://localhost:3000/manager/product/:id</p>
