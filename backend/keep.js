// 상품 Detail 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id){
    res.status(400).json({message: "잘못된 정보를 입력하셨습니다."})
  }
  let productionById = {}
  let productionDetail = {
    brand,
    category,
    option
  }

  try{
    productionById = await service.productionFindById(id)
    if(!productionById){
      res.status(400).json({message: "해당 상품이 없습니다."})
    }
  } catch(e){
    res.status(400).json({e})
  }

  try{
    const brandId = productionById.production_brand_id
    const { brand } = productionDetail.brand
    brand = await service.brandByProductionId(brandId)
    if(!brand){
      res.status(400).json({message: "해당 상품에 브랜드 정보가 없습니다."})
    }
    productionDetail.brand = brand
  } catch(e){
    res.status(400).json({e})
  }

  try{
    const categoryId = productionById.production_category_id
    const { category } = productionDetail.category
    brand = await service.categoryByProductionId(categoryId)
    if(!category){
      res.status(400).json({message: "해당 상품에 카테고리 정보가 없습니다."})
    }
    productionDetail.category = category
  } catch(e){
    res.status(400).json({e})
  }

  try{
    const productionOptions = await service.productionOptionById(id)
    if(!productionOptions){
      res.status(400).json({message: "해당 상품 옵션정보가 잘못 되었습니다."})
    }
    productionDetail.option = productionOptions
  } catch(e){
    res.status(400).json({e})
  }

  res.status(200).json({productionDetail})
})