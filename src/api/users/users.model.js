import { DataTypes } from 'sequelize'

import sequelize from '../../config/sequelize.js'

const usersModel = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(11),
    required: true,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(11),
    required: true,
    allowNull: false,
    unique: true,
  },
})

export default usersModel
