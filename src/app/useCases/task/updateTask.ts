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

export async function updateTask(id: string, taskData: TaskData) {
  const boardExists = await BoardRepository.findById(taskData.boardId)

  if (!boardExists) {
    throw new APPError('Board does not exists')
  }

  const taskExists = await TaskRepository.findById(id)

  if (!taskExists) {
    throw new APPError('Task does not exists')
  }

  if (taskExists.boardId !== boardExists.id) {
    throw new APPError('Task does not belongs to this board')
  }

  return TaskRepository.update(id, taskData)
}
