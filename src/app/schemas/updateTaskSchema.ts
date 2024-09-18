import { z } from 'zod'

export const updateTaskSchema = z.object({
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
      invalid_type_error: 'description must be a string or undefined',
    })
    .optional(),
  icon: z
    .string({
      required_error: 'icon is a required field',
      invalid_type_error: 'icon must be a string',
    })
    .min(1, {
      message: 'icon is a required field',
    }),
  status: z
    .enum(['IN_PROGRESS', 'COMPLETED', 'WONT_DO'], {
      invalid_type_error:
        'status must be one of this options or undefined: IN_PROGRESS, COMPLETED, WONT_DO',
    })
    .optional(),
})
