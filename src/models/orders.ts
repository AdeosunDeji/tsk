import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/db';

export default class Order extends Model{
    public id!: string;
    public userId!: string;
    public product_name!: string;
    public quantity!: number;

    static associate(models: any) {
        Order.belongsTo(models.User, {
            foreignKey: 'userId'
        })
    }
}

Order.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    }
 }, {
        sequelize,
        tableName: 'orders',
        timestamps: true
    });

