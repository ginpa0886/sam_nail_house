const {Router} = require('express')
const service = require('../service')

const router = Router()

// 리뷰 List 조회 API
router.get('/list', async(req, res) => {
  const page = req.query.page === undefined ? 1 : +req.query.page
  const pageSize = req.query.pageSize === undefined ? 1 : +req.query.pageSize

  try{
    const reviewLists = await service.reviewList(page, pageSize)
    if(!reviewLists){
      res.status(400).json({message: "review List가 존재하지 않습니다."})
    }
    res.status(200).json({reviewLists})
  } catch(e) {
    res.status(400).json({e})
  }
})

// 리뷰 상세 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id && isNaN(id)){
    res.status.json({message: "id 값이 없습니다."})
  }

  try{
    const reviewsById = await service.reviewFindById(id)
    if(!reviewsById){
      res.status(400).json({message: "해당 review는 존재하지 않습니다."})
    }
    res.status(200).json({reviewsById})
  } catch(e){
    res.status(400).json({e})
  }
})

// 리뷰 등록 API
router.post('/', async(req, res) => {
  const { user_re_id, production_re_id, option_re_id, rating, picture, text, good } = req.params
  if(!user_re_id || isNaN(user_re_id)){
    res.status.json({message: "user_re_id 값이 적절하지 않습니다."})
  }
  if(!production_re_id || isNaN(production_re_id)){
    res.status.json({message: "production_re_id 값이 적절하지 않습니다."})
  }
  if(!option_re_id || isNaN(option_re_id)){
    res.status.json({message: "option_re_id 값이 적절하지 않습니다."})
  }
  if(!rating || isNaN(rating)){
    res.status.json({message: "rating 값이 적절하지 않습니다."})
  }
  if(!picture){
    res.status.json({message: "picture 값이 적절하지 않습니다."})
  }
  if(!text){
    res.status.json({message: "text 값이 적절하지 않습니다."})
  }
  if(!good){
    res.status.json({message: "good 값이 적절하지 않습니다."})
  }
  const reviewData = {
    user_re_id, production_re_id, option_re_id, rating, picture, text, good
  }

  try{
    await service.reviewCreate(reviewData)
    res.status(200).json({message: "리뷰를 등록하였습니다."})
  } catch(e){
    res.status(400).json({e})
  }
  
  try{
    
    await service.reviewCreate(foreignKey)
    res.status(200).json({message: "리뷰가 등록되었습니다."})  
  } catch(e){
    res.status(400).json({e})
  }
})

module.exports = router