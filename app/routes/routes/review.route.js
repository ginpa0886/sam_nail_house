const {Router} = require('express')
const service = require('../service/service')

const router = Router()

// 리뷰 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id && isNaN(id)){
    res.status.json({message: "id 값이 없습니다."})
  }

  try{
    const reviewsById = await service.reviewFindById(id)
    if(!reviewsById){
      res.status(400).json({message: "id에 해당하는 review가 없습니다."})
    }
    res.status(200).json({reviewsById})
  } catch(e){
    res.status(400).json({e})
  }
})

router.post('/:id', async(req, res) => {
  const { id } = req.params
  if(!id && isNaN(id)){
    res.status.json({message: "id 값이 없습니다."})
  }
  let foreignKeyById = {}

  try{
    foreignKeyById = await service.foreignKeyFindById(id)
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