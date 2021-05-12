import { DataTypes, Model } from 'sequelize'
import Product from './Product.model'

export class Variant extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                ParentId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                },
                ChildId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'Variant'
            }
        )
    }

    static associate(models) {
        models.Product.belongsToMany(
            models.Product,
            {
                through: this,
                as: 'Parents'
            }
        )

        models.Product.belongsToMany(
            models.Product,
            {
                through: this,
                as: 'Children'
            }
        )
    }
}

export default Variant
