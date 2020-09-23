const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports = {

    async store(req, res) {

        const { category_id } = req.params

        const { name, description, price } = req.body

        const checkCategory = await Category.findByPk(category_id)

        if (!checkCategory) {
            return res.status(400).json({ error: 'Category not found' })
        }


        await checkCategory.addProduct({
            name,
            description,
            price
        })

        return res.status(200).json(insert)
    }
}