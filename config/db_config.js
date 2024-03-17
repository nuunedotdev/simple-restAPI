const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('prac_seq', 'root', 'root', {
    dialect: 'mysql',
    port: 3307
})

const dbConn = async () => {
    try{
        await sequelize.authenticate()
        console.log('Connected successfully.')
    }catch(error){
        console.log('Error: ', error)
    }
}

module.exports = {dbConn, sequelize, DataTypes}

