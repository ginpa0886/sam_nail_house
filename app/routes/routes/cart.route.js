const {Router} = require('express')
const service = require('../service/service')
const router = Router()

// 장바구니 전체 조회 API
router.get('/', (req, res) => {

})

// 장바구니 상세 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id && isNaN(id)){
    res.status.json({message: "id 값이 없습니다."})
  }

  


})

// 장바구니 등록 API
router.post('/', (req, res) => {
  const { production_id, option_id, user_id, amount } = req.body

  if(!production_id){
    res.status(400).json({message: "상품이 없습니다."})
  }
  if(!option_id){
    res.status(400).json({message: "상품 옵션이 없습니다."})
  }
  if(!user_id){
    res.status(400).json({message: "상품 등록 유저가 없습니다."})
  }
  if(!amount){
    res.status(400).json({message: "상품 수량이 없습니다"})
  }
})

module.exports = router