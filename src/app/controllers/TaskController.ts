import { Request, Response } from 'express'
import { createTaskSchema } from '../schemas/createTaskSchema'
import { createTask } from '../useCases/task/createTask'
import { idSchema } from '../schemas'
import { updateTaskSchema } from '../schemas/updateTaskSchema'
import { updateTask } from '../useCases/task/updateTask'
import { deleteTask } from '../useCases/task/deleteTask'

class TaskController {
  async store(req: Request, res: Response) {
    const boardId = idSchema.parse(req.params.boardId)
    const data = createTaskSchema.parse(req.body)

    const task = await createTask({ ...data, boardId })

    return res.status(201).json(task)
  }

  async update(req: Request, res: Response) {
    const boardId = idSchema.parse(req.params.boardId)
    const id = idSchema.parse(req.params.id)
    const data = updateTaskSchema.parse(req.body)

    const task = await updateTask(id, { ...data, boardId })

    return res.json(task)
  }

  async destroy(req: Request, res: Response) {
    const boardId = idSchema.parse(req.params.boardId)
    const id = idSchema.parse(req.params.id)

    await deleteTask(id, boardId)

    return res.sendStatus(200)
  }
}

export default new TaskController()
