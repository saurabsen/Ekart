const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db ="mongodb://saurav540:saurav540@ds113482.mlab.com:13482/productdb"
//const upload = require('./upload')
//const cors = required('cors')

mongoose.connect(db, err => {
    if (err) {
        console.error('Error! ' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id}
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) =>{
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else
            if ( user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else{
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretkey')
                res.status(200).send({token})
            }
        }
    })
})
//change event to product
router.get('/product', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "2",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "3",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "4",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "5",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "6",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          }
    ]
   res.json(events)
})

router.get('/addproduct', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "2",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "3",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "4",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "5",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          },
          {
            "_id": "6",
            "name": "Phone",
            "price": "10000",
            "quantity": "30"
          }
    ]
   res.json(events)
})

module.exports = router