const {Router} = require('express')
const service = require('../service/service')
const router = Router()

// 바로구매 조회 API
router.get('/', (req, res) => {

})

// 바로구매 등록 API
router.post('/', async(req, res) => {
  const { production_id, option_id, user_id, amount } = req.body

  if(!production_id){
    res.status(400).json({message: "production_id의 값이 없습니다."})
  }
  if(!option_id){
    res.status(400).json({message: "option_id의 값이 없습니다."})
  }
  if(!user_id){
    res.status(400).json({message: "user_id의 값이 없습니다."})
  }
  if(!amount){
    res.status(400).json({message: "amount의 값이 없습니다."})
  }

  try{

  } catch(e){
    res.status(400).json({e})
  }

})

module.exports = router