import { Router } from 'express'
import BoardController from '../controllers/BoardController'
import TaskController from '../controllers/TaskController'

export const router = Router()

router.get('/boards/:id', BoardController.show)
router.post('/boards', BoardController.store)
router.put('/boards/:id', BoardController.update)

router.post('/boards/:boardId/tasks', TaskController.store)
router.put('/boards/:boardId/tasks/:id', TaskController.update)
router.delete('/boards/:boardId/tasks/:id', TaskController.destroy)
