import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../config/db';


export default class User extends Model {
  public id!: string;
  public username!: string;
  public email!: string;
  public password!: string;

  static associate(models: any) {
    User.hasMany(models.Order, {
      foreignKey: "userId"
    })
  }
}

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  });


