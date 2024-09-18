import { z } from 'zod'

export const updateBoardSchema = z.object({
  title: z
    .string({
      required_error: 'title is a required field',
      invalid_type_error: 'title must be a string',
    })
    .min(1, {
      message: 'title is a required field',
    }),
  description: z
    .string({
      required_error: 'description is a required field',
      invalid_type_error: 'description must be a string',
    })
    .min(1, {
      message: 'description is a required field',
    }),
})
