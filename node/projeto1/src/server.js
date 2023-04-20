const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("Ok..")

    return res.json({message: "teste novo"})
})

app.listen(5000, () => console.log("Server is running..."))