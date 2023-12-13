import app from './app.js'

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Welcome to the Camel API!')
})

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`🔥 Server running on port ${port}`)
})
