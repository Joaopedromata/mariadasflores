const Router = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const CategoryController = require('./controllers/CategoryController')
const ProductController = require('./controllers/ProductController')


const routes = Router()

routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)

routes.post('/categories', CategoryController.store)

routes.post('/:category_id/products', ProductController.store)
//routes.get('/:category/products', ProductController.index)

module.exports = routes