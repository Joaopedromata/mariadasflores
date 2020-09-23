const User = require('../models/User')

module.exports = {

    async store(req, res){

        const { first_name, last_name, phone_number, email } = req.body

        const checkPhone = await User.findOne({ where: { phone_number }})

        if(checkPhone){
            return res.status(400).json({ error: 'This phone number already exists' })
        }

        const checkEmail = await User.findOne({ where: { email }})

        if(checkEmail){
            return res.status(400).json({ error: 'This email already exists' })
        }

        const insert = await User.create({
            first_name, 
            last_name, 
            phone_number, 
            email
        })

        return res.status(200).json(insert)

    }
}