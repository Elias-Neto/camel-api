import bcrypt from 'bcryptjs'
const { hash } = bcrypt

import { insertUser } from './users.dao.js'

import AppError from '../../utils/AppError.js'
import HttpStatus from '../../types/global.enums.js'

const createUser = async (request, response) => {
  const { body } = request

  try {
    const checkPassword = body.password === body.confirmedPassword

    if (!checkPassword) {
      throw new AppError(
        HttpStatus[400].statusCode,
        'As senhas devem ser iguais.',
      )
    }

    const passwordHash = await hash(body.password, 8)

    await insertUser({ ...body, password: passwordHash })

    return response.status(201).json()
  } catch (error) {
    if (error instanceof AppError) {
      throw response.status(error.statusCode).json({
        message: error.message,
      })
    }

    throw response.status(HttpStatus[500].statusCode).json({
      message: HttpStatus[500].message,
    })
  }
}

export { createUser }
