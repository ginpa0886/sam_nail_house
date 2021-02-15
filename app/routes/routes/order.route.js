const {Router} = require('express')
const service = require('../service')
const router = Router()

// 바로구매 조회 API
router.get('/list', async(req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  const pageSize = req.query.pageSize !== undefined ? req.query.pageSize : 1;
  if(!page){
    res.status(400).json({message: "page 값이 올바르지 않습니다."})
  }
  if(!pageSize){
    res.status(400).json({message: "pageSize 값이 올바르지 않습니다."})
  }

  try{
    const orderList = await service.orderList(page, pageSize)
    if(!orderList){
      res.status(400).json({message: "바로구매 list 정보가 없습니다."})
    }
    res.status(200).json({orderList})
  } catch(e){
    res.status(400).json({e})
  }
})

// 바로구매 상세 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "바로구매 id 값이 옳바르지 않습니다."})
  }

  try{
    const orderDetail = await service.orderFindById(id)
    if(!orderDetail){
      res.status(400).json({message: "해당 바로구매 정보가 없습니다."})
    }
    res.status(200).json({orderDetail})
  } catch(e){
    res.status(400).json({e})
  }
})

// 바로구매 등록 API
router.post('/', async(req, res) => {
  const { user_order_id, production_order_id, option_order_id, amount, total_price } = req.body

  if(!user_order_id){
    res.status(400).json({message: "user_order_id 값이 없습니다."})
  }
  if(!production_order_id){
    res.status(400).json({message: "production_order_id 값이 없습니다."})
  }
  if(!option_order_id){
    res.status(400).json({message: "option_order_id 값이 없습니다."})
  }
  if(!amount){
    res.status(400).json({message: "amount의 값이 없습니다."})
  }
  if(!total_price){
    res.status(400).json({message: "total_price 값이 없습니다."})
  }

  const orderDetail = {
    user_order_id, production_order_id, option_order_id, amount, total_price
  }

  try{
    await service.cartCreate(orderDetail)
    res.status(200).json({message: "상품 구매요청이 완료되었습니다."})
  } catch(e){
    res.status(400).json({e})
  }

})

module.exports = router