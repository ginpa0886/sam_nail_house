const {Router} = require('express')
const service = require('../service')
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

// 유저의 장바구니 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "유저 아이디가 올바르지 않습니다."})
  }
  const UserCartInfo = {
    info:{}
  }

  try{
    const cartDetail = await service.cartFindById(id)
    if(!cartDetail){
      res.status(400).json({message: "해당 장바구니 정보가 없습니다."})
    }
    UserCartInfo.info = cartDetail
    res.status(200).json({UserCartInfo})
  } catch(e){
    res.status(400).json({message:e})
    return
  }
  
})

// 장바구니 등록 API
router.post('/', async(req, res) => {
  console.log("백엔드에서는 요청이 오긴 했습니다.");
  const { user_cart_id, production_cart_id, option_cart_id, amount } = req.body
  let price = 0;

  if(!user_cart_id || isNaN(user_cart_id)){
    res.status(400).json({message: "user_cart_id 값이 없습니다."})
    return
  }
  if(!production_cart_id || isNaN(production_cart_id)){
    res.status(400).json({message: "production_cart_id 값이 없습니다."})
    return
  }
  if(!option_cart_id || isNaN(option_cart_id)){
    res.status(400).json({message: "option_cart_id 값이 없습니다."})
    return
  }
  if(!amount || isNaN(amount)){
    res.status(400).json({message: "amount의 값이 없습니다."})
    return
  }
  
  try{
    const Id = option_cart_id
    const sellPrcie = await service.cartFindForPrice(Id)
    if(!sellPrcie){
      res.status(400).json("해당 상품의 가격이 없습니다.")
      return
    }
    const { option_sell_price } = sellPrcie[0]
    price = amount * option_sell_price
  } catch(e){
    res.status(400).json({message: "에러 발생!"})
    return
  }
  

  try{
    cartDetail = {
      user_cart_id, production_cart_id, option_cart_id, amount
    }
    await service.cartCreate(cartDetail)
    res.status(200).json({message: "상품 장바구니 요청이 완료되었습니다."})
  } catch(e){
    res.status(400).json({e})
  }
})

module.exports = router