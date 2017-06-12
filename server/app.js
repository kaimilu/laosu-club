global.Promise = require('bluebird')

const log = require('./utils/log')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const mongoRest = require('./mongoRest')
