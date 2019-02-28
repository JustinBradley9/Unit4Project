const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.static(__dirname + '/client/public/'))

app.get('/', (req, res) => {
res.sendFile(__dirname + '/client/public/index.html')
})
app.use('/', routes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
console.log(`Server is listening on PORT: ${PORT}`)
})