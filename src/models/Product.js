const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.DECIMAL,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Category, { 
            foreignKey: 'product_id', 
            through: 'category_product', 
            as: 'associateProdCat' 
        })
    }

}

module.exports = Product