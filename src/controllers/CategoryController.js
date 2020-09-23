const Category = require('../models/Category')

module.exports = {

    async store(req, res) {

        const { name } = req.body

        const checkName = await Category.findOne({ where: { name }})

        if (checkName) {
            return res.status(400).json({ error: 'This category already exists' })
        }

        const insert = await Category.create({ name })

        return res.status(200).json(insert)
    }
}