import BoardRepository from '../../repositories/BoardRepository'
import TaskRepository from '../../repositories/TaskRepository'

interface TaskData {
  title: string
  description?: string
  icon: string
  status?: 'IN_PROGRESS' | 'COMPLETED' | 'WONT_DO'
}

interface BoardData {
  title: string
  description: string
  tasks: TaskData[]
}

export async function createBoard(boardData: BoardData) {
  const board = await BoardRepository.create({
    title: boardData.title,
    description: boardData.description,
  })
  const tasks = await Promise.all(
    boardData.tasks.map((task) =>
      TaskRepository.create({ ...task, boardId: board.id }),
    ),
  )

  return { ...board, tasks }
}
