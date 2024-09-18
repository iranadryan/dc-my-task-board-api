import { prisma } from '../../libs/prisma'

interface TaskData {
  title: string
  description?: string
  icon: string
  status?: 'IN_PROGRESS' | 'COMPLETED' | 'WONT_DO'
  boardId: string
}

class TaskRepository {
  findById(id: string) {
    return prisma.task.findUnique({
      where: {
        id,
      },
    })
  }

  findByBoardId(boardId: string) {
    return prisma.task.findMany({
      where: {
        boardId,
      },
    })
  }

  create(data: TaskData) {
    return prisma.task.create({
      data,
    })
  }

  update(id: string, data: TaskData) {
    return prisma.task.update({
      where: {
        id,
      },
      data,
    })
  }

  delete(id: string) {
    return prisma.task.delete({
      where: {
        id,
      },
    })
  }
}

export default new TaskRepository()
