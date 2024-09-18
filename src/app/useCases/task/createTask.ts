import { APPError } from '../../errors/APPError'
import BoardRepository from '../../repositories/BoardRepository'
import TaskRepository from '../../repositories/TaskRepository'

interface TaskData {
  title: string
  description?: string
  icon: string
  status?: 'IN_PROGRESS' | 'COMPLETED' | 'WONT_DO'
  boardId: string
}

export async function createTask(taskData: TaskData) {
  const boardExists = await BoardRepository.findById(taskData.boardId)

  if (!boardExists) {
    throw new APPError('Board does not exists')
  }

  return TaskRepository.create(taskData)
}
