const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const routes = require('./routes/todo.route')


const PORT = process.env.PORT || 6000
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('connect success mongodb'))
.catch((err) => console.error(err))

app.use("/api", routes)
app.get('/', (req, res) => (
    res.send('Server is running')
)
)

app.listen(PORT, () => {
    console.log(`Server is running on port htpp://localhost:${PORT}`)
})


