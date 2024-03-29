const express = require('express');
const router = express.Router()

const customerModel = require('../models/customer')

router.get('/', async (req, res) => {

    try{
        const customers = await customerModel.findAll();
        res.status(200).send(customers)
    }catch(error){
        console.log("Error: ", error)
    }
    // res.status(200).send('Home Page Customer Router')
})


router.post('/', async (req, res) => {
    try{
        const customer = await customerModel.create({ 
            customer_name: req.body.customer_name,
            customer_phone: req.body.customer_phone,
            customer_email: req.body.customer_email,
            customer_address: req.body.customer_address
        });

        res.status(200).send(customer)

    }catch(error){
        // res.status(200).send('Home Page Customer Router')
        console.log("Error: ", error)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const customer = await customerModel.findAll({
            where: {
                id: req.params.id
            }
        })

        res.status(200).send(customer)
    }catch(error){
        console.log("Error: ", error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const customer = customerModel.update({
            customer_email: req.body.customer_email,
            customer_name: req.body.customer_name,
            customer_phone: req.body.customer_phone,
            customer_address: req.body.customer_address
        },{
            where: {
                id: req.params.id
            }
        })

        res.status(200).send(customer)
    } catch (error) {
        console.log(error)
    }
})


router.delete('/:id', async (req, res) => {

    try {
        const customer = customerModel.destroy({
            where: {
              id: req.params.id
            }
        })
        res.status(200).send('Customer Deleted successfully.')
    } catch (error) {
        console.log(error)
    }

})

module.exports = router