const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports = {

    async index(req, res) {

        const { category_id } = req.params

        const show = await Category.findByPk(category_id, {
            include: { association: 'products'}
        })

        if (!show) {
            return res.status(400).json({ error: 'Category not found' })
        }

        return res.status(200).json(show)
    },

    async store(req, res) {

        const { category_id } = req.params

        const { name, description, price } = req.body

        const checkCategory = await Category.findByPk(category_id)

        if (!checkCategory) {
            return res.status(400).json({ error: 'Category not found' })
        }

        const insert = await Product.create({
            name,
            description,
            category_id,
            price
        })

        return res.status(200).json(insert)
    }
}