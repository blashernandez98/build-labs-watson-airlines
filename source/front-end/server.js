import express from 'express'
const app = express()

app.use(express.static('dist'))

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080')
})
