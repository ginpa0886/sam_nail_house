const {Router} = require('express');
const service  = require('../service/service')

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
  const { id } = req.params
  if(!id){
    res.status(400).json({message: "잘못된 정보를 입력하셨습니다."})
  }

  try{
    productionById = await service.productionFindById(id)
    if(!productionById){
      res.status(400).json({message: "해당 상품이 없습니다."})
    }
    res.status(200).json({productionById})
  } catch(e){
    res.status(400).json({e})
  }
 
})

// 상품 등록 API
router.post('/', async(req, res) => {
  const { 
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
    return_address  } = req.body;

  if(req.body){
    if(!production_id){
      res.status(400).json({message:"production_id의 값이 없습니다."})
    }
    if(!brand_id){
      res.status(400).json({message:"brand_id의 값이 없습니다."})
    }
    if(!category_id){
      res.status(400).json({message:"category_id의 값이 없습니다."})
    }
    if(!name){
      res.status(400).json({message:"name 값이 없습니다."})
    }
    if(!price){
      res.status(400).json({message:"price 값이 없습니다."})
    }
    if(!sale){
      res.status(400).json({message:"sale 값이 없습니다."})
    }
    if(!point){
      res.status(400).json({message:"point 값이 없습니다."})
    }
    if(!type){
      res.status(400).json({message:"type 값이 없습니다."})
    }
    if(!free){
      res.status(400).json({message:"free 값이 없습니다."})
    }
    if(!fee){
      res.status(400).json({message:"fee 값이 없습니다."})
    }
    if(!return_fee){
      res.status(400).json({message:"return_fee 값이 없습니다."})
    }
    if(!exchange_fee){
      res.status(400).json({message:"exchange_fee 값이 없습니다."})
    }
    if(!special_fee){
      res.status(400).json({message:"special_fee 값이 없습니다."})
    }
    if(!inaccessible){
      res.status(400).json({message:"inaccessible 값이 없습니다."})
    }
    if(!return_address){
      res.status(400).json({message:"return_address 값이 없습니다."})
    }
  }

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

  try{
    await service.productionPost(productionDetail)
    res.status(200).json({message: "상품이 등록되었습니다.", productionDetail})
  } catch(e){
    res.status(400).json(e)
  }
})

// 상품 상세 옵션 조회 API
router.get('/:id/option', async(req, res) => {
  const { id } = req.params
  if(!id){
    res.status(400).json({message: "잘못된 정보를 입력하셨습니다."})
  }
  try{
    const production_options = await service.productionOptionById(id)
    if(!production_options){
      res.status(400).json({message: "해당 상품의 옵션이 없습니다."})
    }
    res.status(200).json({production_options})
  } catch(e){
    res.status(400).json({e})
  }
})


module.exports = router
