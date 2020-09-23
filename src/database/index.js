const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Address = require('../models/Address')
const Product = require('../models/Product')
const Category = require('../models/Category')

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)

Category.init(connection)
Product.init(connection)

User.associate(connection.models)
Address.associate(connection.models)

Category.associate(connection.models)
Product.associate(connection.models)

module.exports = connection