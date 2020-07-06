const router = require('express').Router()
const UserContoller = require('../controller/User')

router.post('/register', (req, res) => {
  UserContoller.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  UserContoller.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getalluser', (req, res) => {
  UserContoller.getAllUser()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router