import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import { pokemonRouter } from './pokemon/router/pokemon/pokemon.router';
require('dotenv').config();

const app = new Koa();

app.use(bodyparser());

app.use(cors({
    origin: '*',
    allowHeaders: 'Content-Type, Access-Control-Allow-Headers,Access-Control-Allow-Origin, Authorization, X-Requested-With,',
    allowMethods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
}));

app.use(pokemonRouter);

export const appServer = app;