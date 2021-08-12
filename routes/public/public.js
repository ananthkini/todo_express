const express = require('express')
const router = express.Router()
const userModel = require('../../model/user.model')


router.get('/', function(req, res) {
    res.render('../views/home', { title: 'Home' })
})

router.get('/about', function(req, res) {
    res.render('../views/about', { title: 'About' })
})

router.get('/login', function(req, res) {
    res.render('../views/login', { title: 'Login' })
})
router.post('/login', function(req, res) {
    let { username, password } = req.body;
})


router.get('/signup', function(req, res) {
    res.render('../views/signup', { title: 'Sign up' })
})
router.post('/signup', async(req, res) => {
    let { fname, username, email, password } = req.body
    const users = await userModel.getAllposts()
    console.log(JSON.parse(users));

})

module.exports = router