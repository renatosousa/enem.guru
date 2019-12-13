'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','QuestoesController.index')

Route.get('/questoes/add', 'QuestoesController.add')

Route.get('/questoes/list', 'QuestoesController.list')

Route.get('/questoes/:id', 'QuestoesController.detalhe')

Route.post('/questoes/adiciona', 'QuestoesController.adiciona')
