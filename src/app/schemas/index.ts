import { z } from 'zod'

export const idSchema = z
  .string({
    required_error: 'id is required',
    invalid_type_error: 'id must be a string',
  })
  .cuid2({
    message: 'invalid id format',
  })
