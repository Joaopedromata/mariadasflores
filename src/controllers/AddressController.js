const Address = require('../models/Address')
const User = require('../models/User')


module.exports = {

    async index(req, res) {
        const { user_id } = req.params

        const show = await User.findByPk(user_id, {
            include: { association: 'addresses'}
        })

        return res.status(200).json(show.addresses)
    },

    async store(req, res) {

        const { user_id } = req.params
        const { zipcode, street, neighborhood, city, state, number, complement } = req.body

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'User not found' })
        }
    
        const insert = await Address.create({
            zipcode, 
            street, 
            neighborhood, 
            city, 
            state, 
            number, 
            complement,
            user_id
        })

        return res.status(200).json(insert)
    }

}