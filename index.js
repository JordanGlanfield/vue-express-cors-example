const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/the-data', (req, res) => {
    return res.send({
        value: Math.round(Math.random() * 1000)
    })
})

app.listen(8000, () => {
    console.log('Hey! I\'m listening on port 8000')
})