const { Model, DataTypes } = require('sequelize')

class Category extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Product, { 
            foreignKey: 'category_id', 
            through: 'category_product', 
            as: 'associateCatProd' 
        })
    }

}

module.exports = Category