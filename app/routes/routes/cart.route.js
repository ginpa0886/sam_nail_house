const {Router} = require('express')
const service = require('../service/service')
const router = Router()

// 장바구니 전체 조회 API
router.get('/', async(req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  const pageSize = req.query.pageSize !== undefined ? req.query.pageSize : 1;
  if(!page){
    res.status(400).json({message: "page 값이 올바르지 않습니다."})
  }
  if(!pageSize){
    res.status(400).json({message: "pageSize 값이 올바르지 않습니다."})
  }

  try{
    const cartList = await service.cartList(page, pageSize)
    if(!cartList){
      res.status(400).json({message: "장바구니 list 정보가 없습니다."})
    }
    res.status(200).json({cartList})
  } catch(e){
    res.status(400).json({e})
  }
})

// 장바구니 상세 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "바로구매 id 값이 옳바르지 않습니다."})
  }

  try{
    const cartDetail = await service.cartFindById(id)
    if(!cartDetail){
      res.status(400).json({message: "해당 장바구니 정보가 없습니다."})
    }
    res.status(200).json({cartDetail})
  } catch(e){
    res.status(400).json({e})
  }

})

// 장바구니 등록 API
router.post('/', async(req, res) => {
  const { user_cart_id, production_cart_id, option_cart_id, amount, total_price } = req.body

  if(!user_cart_id){
    res.status(400).json({message: "user_cart_id 값이 없습니다."})
  }
  if(!production_cart_id){
    res.status(400).json({message: "production_cart_id 값이 없습니다."})
  }
  if(!option_cart_id){
    res.status(400).json({message: "option_cart_id 값이 없습니다."})
  }
  if(!amount){
    res.status(400).json({message: "amount의 값이 없습니다."})
  }
  if(!total_price){
    res.status(400).json({message: "total_price 값이 없습니다."})
  }

  const cartDetail = {
    user_order_id, production_order_id, option_order_id, amount, total_price
  }

  try{
    await service.cartCreate(cartDetail)
    res.status(200).json({message: "상품 장바구니 요청이 완료되었습니다."})
  } catch(e){
    res.status(400).json({e})
  }
})

module.exports = router