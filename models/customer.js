const {sequelize, DataTypes} = require('../config/db_config')

const Customer = sequelize.define('customer', {
    customer_name: {
        type: DataTypes.STRING,
        min: 5,
        max: 80
    },
    customer_phone: {
        type: DataTypes.INTEGER,
        min: 10,
        max: 15
    },
    customer_email: {
        type: DataTypes.STRING
    },
    customer_address: {
        type: DataTypes.STRING
    }
})

const dbSync = async () =>{
    try{
        await sequelize.sync()
        console.log('Executed successfully.')
    }catch( error ){
        console.log(error.message)
    }
}

// dbSync()


module.exports = Customer