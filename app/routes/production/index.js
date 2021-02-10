const {Router} = require('express');
const service  = require('./production-service')
const productModel = require('../models/production.model')
const router = Router()

// 상품 list 조회 API
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
    const productionList = await service.productionList(page, pageSize)
    res.status(200).json({productionList})
  } catch(e){
    res.status(400).json({e})
  }
})

// 상품 Detail 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.query
  if(!id){
    res.status(400).json({message: "잘못된 정보를 입력하셨습니다."})
  }
  try{
    const productId = await service.productionFindById(id)
    res.status(200).json({productId})

  } catch(e){
    res.status(400).json({e})
  }
})

// 상품 등록 API
router.post('/:id', async(req, res) => {
  const { production_id, brand_id, category_id } = req.body;
  if(!production_id){
    res.status(400).json({message:"production_id의 값이 없습니다."})
  }
  if(!brand_id){
    res.status(400).json({message:"brand_id의 값이 없습니다."})
  }
  if(!category_id){
    res.status(400).json({message:"category_id의 값이 없습니다."})
  }

  try{
    const productionDetail = {
      production_id,
      brand_id,
      category_id,
      name,
      price,
      sale,
      point,
      type,
      free,
      fee,
      return_fee,
      exchange_fee,
      special_fee,
      inaccessible,
      return_address,
    }
    await service.productionPost(productionDetail)
    res.status(200).json({message: "상품이 등록되었습니다.", productionDetail})
  } catch(e){
    res.status(400).json(e)
  }
})

router.get('/:id/reivew', (req, res) => {

})


module.exports = router
