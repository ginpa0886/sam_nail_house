const {Router} = require('express')
const jwt = require('jsonwebtoken')
const secretKey = require('../config/auth.config');
const router = require('../routes/production.route');


router.use('/', (req, res, next) => {
  console.log('실행됨');
  jwt.sign({}, secretKey.secret, { expiresIn: '5m'})
})



module.exports = router