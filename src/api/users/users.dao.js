import usersModel from './users.model.js'

const insertUser = async userData => {
  return await usersModel.create(userData)
}

const updateUser = async (userID, data) => {
  await usersModel.update(data, {
    where: {
      id: userID,
      deletedAt: null,
    },
  })

  return await findUserByID(userID)
}

const findUserByEmail = async email => {
  return await usersModel.findOne({
    where: {
      email,
      deletedAt: null,
    },
  })
}

const findUserByID = async userID => {
  return await usersModel.findOne({
    where: {
      id: userID,
      deletedAt: null,
    },
  })
}

const findAllUsers = async () => {
  return await usersModel.findAll({
    where: {
      deletedAt: null,
    },
  })
}

const deleteUser = async userID => {
  return await usersModel.destroy({
    where: {
      id: userID,
      deletedAt: null,
    },
  })
}

export {
  insertUser,
  findUserByEmail,
  deleteUser,
  findAllUsers,
  findUserByID,
  updateUser,
}
