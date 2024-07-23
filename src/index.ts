import express, { Request, Response, NextFunction } from 'express'

const app = express()

const PORT = 3000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('<h1>Hello World...</h1>')
})

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT} 🚀`)
})
