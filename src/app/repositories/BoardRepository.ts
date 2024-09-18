import { prisma } from '../../libs/prisma'

interface BoardData {
  title: string
  description: string
}

class BoardRepository {
  findAll() {
    return prisma.board.findMany()
  }

  findById(id: string) {
    return prisma.board.findUnique({
      where: {
        id,
      },
      include: {
        tasks: true,
      },
    })
  }

  create(data: BoardData) {
    return prisma.board.create({
      data,
    })
  }

  update(id: string, data: BoardData) {
    return prisma.board.update({
      where: {
        id,
      },
      data,
    })
  }
}

export default new BoardRepository()
