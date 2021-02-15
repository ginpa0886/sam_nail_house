const {Router} = require('express')
const service = require('../service')

const router = Router()

// 리뷰 별점 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "요청 값이 올바르지 않습니다."})
  }
  let stars = {}
  
  try{
    const starById = await service.findStarById(id)
    if(!starById){
      res.status(400).json({message: "해당 상품의 리뷰가 없습니다."})
    }
    stars = starById
  } catch(e){
    res.status(400).json({e})
  }
 
  try{
    const starDetail = await service.starCount(stars)
    if(!starDetail){
      res.status(400).json({message: "별점 조회 정보가 없습니다."})
    }
    res.status(200).json({starDetail})
  } catch(e){
    res.status(400).json({e})
  }
})

module.exports = router