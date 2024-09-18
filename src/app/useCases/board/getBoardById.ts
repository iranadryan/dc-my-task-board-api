import { APPError } from '../../errors/APPError'
import BoardRepository from '../../repositories/BoardRepository'
import TaskRepository from '../../repositories/TaskRepository'

export async function getBoardById(id: string) {
  const board = await BoardRepository.findById(id)

  if (!board) {
    throw new APPError('Board does not exists')
  }

  const tasks = await TaskRepository.findByBoardId(id)

  return { ...board, tasks }
}
