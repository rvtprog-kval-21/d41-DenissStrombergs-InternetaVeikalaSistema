import { DataTypes, Model } from 'sequelize'

export class Category extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                urlKey: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: true
                },
                isEnabled: {
                    type: DataTypes.BOOLEAN
                },
                name: {
                    type: DataTypes.STRING
                },
                productCount: {
                    type: DataTypes.INTEGER
                },
                isInMenu: {
                    type: DataTypes.BOOLEAN
                },
                content: {
                    type: DataTypes.TEXT
                },
                category_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Category,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'Category'
            }
        )
    }

    static associate() {
        this.hasMany(this, { foreignKey: 'category_id' })
        this.belongsTo(this, { foreignKey: 'category_id' })
    }
}

export default Category
