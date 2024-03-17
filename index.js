const express = require('express')
const {sequelize, dbConn} = require('./config/db_config')
const customerModel = require('./models/customer')


// Routes
const customerRoute = require('./routes/customer')


const app = express()
app.use(express.json())
const port = 8000


app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.use('/api/customers', customerRoute)


app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`)
    await dbConn()
});