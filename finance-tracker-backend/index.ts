import express from 'express'
import { BASE_URI } from './app/config'
import { baseRoute } from './app/routes'
const app = express()
app.use(BASE_URI, baseRoute)
app.listen(8080, () => {
  console.log("hello server")
})
