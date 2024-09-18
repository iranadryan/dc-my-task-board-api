import { Request, Response } from 'express'

import { createBoard } from '../useCases/board/createBoard'
import { getBoardById } from '../useCases/board/getBoardById'
import { updateBoard } from '../useCases/board/updateBoard'

import { updateBoardSchema } from '../schemas/updateBoardSchema'
import { createBoardSchema } from '../schemas/createBoardSchema'
import { idSchema } from '../schemas'

class BoardController {
  async show(req: Request, res: Response) {
    const id = idSchema.parse(req.params.id)

    const board = await getBoardById(id)

    return res.json(board)
  }

  async store(req: Request, res: Response) {
    const data = createBoardSchema.parse(req.body)

    const board = await createBoard(data)

    return res.status(201).json(board)
  }

  async update(req: Request, res: Response) {
    const id = idSchema.parse(req.params.id)
    const data = updateBoardSchema.parse(req.body)

    const board = await updateBoard(id, data)

    return res.json(board)
  }
}

export default new BoardController()
