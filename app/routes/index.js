const {Router} = require('express');

const production = require('./production')
const user = require('./user')

const router = Router()

router.use('/production', production);
router.use('/user', user)

module.exports = router