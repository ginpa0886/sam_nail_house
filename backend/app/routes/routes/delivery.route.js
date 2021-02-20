const {Router} = require('express')
const service = require('../service')

const router = Router()

// 배송 정보 조회
 router.get('/:id', async(req, res) => {
   const { id } = req.params
   if(!id || isNaN(id)){
     res.status(400).json({message: "요청하신 값이 옳바르지 않습니다."})
   }
   
   try{
    const deliveryInfo = await service.findDeliveryInfo(id)
    if(!deliveryInfo){
      res.status(400).json({message: "해당 상품의 배송정보가 없습니다."})
    }
    res.status(200).json({deliveryInfo})
   } catch(e){
     res.status(400).json({e})
   }
 })


module.exports = router