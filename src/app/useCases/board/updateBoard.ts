import BoardRepository from '../../repositories/BoardRepository'

interface BoardData {
  title: string
  description: string
}

export async function updateBoard(id: string, boardData: BoardData) {
  const board = await BoardRepository.update(id, boardData)

  return board
}
