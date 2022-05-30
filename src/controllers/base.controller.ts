import { Response } from 'express'
import { ApplicationException } from '../common/exceptions/application.exception'

export abstract class BaseController {
  handleException (err: any, res: Response) {
    if (err instanceof ApplicationException) {
      res.status(400)
      res.send(err.message)
    } else {
      throw new Error(err)
    }
  }
}
