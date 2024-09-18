import 'dotenv/config'
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { router } from './app/routers/router'
import { errorHandler } from './app/middlewares/errorHandler'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`🔥 Server is running on port ${port}`)
})
