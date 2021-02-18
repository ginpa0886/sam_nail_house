const {Router} = require('express');

const production = require('./routes/production.route')
const user = require('./routes/user.route')
const review = require('./routes/review.route')
const question = require('./routes/question.route')
const cart = require('./routes/cart.route')
const order = require('./routes/order.route')
const starcount = require('./routes/starcount.route')
const delivery = require('./routes/delivery.route')
const test = require('./routes/test.route')


const router = Router()


router.use('/user', user)
router.use('/production', production)
router.use('/production_reviews', review)
router.use('/production_question', question)
router.use('/cart', cart)
router.use('/order', order)
router.use('/counts_for_star', starcount)
router.use('/delivery', delivery)
// router.use('/test', test)


module.exports = router