const db = require('../../../helper/db')

const ACCOUNT = 'production'

// 상품 리스트
const productionList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(ACCOUNT)
      .select('b0rand_id', 'category_id', 'name', 'price', 'sale', 'point', 'type', 'free', 'fee', 'return_fee', 'exchange_fee', 'spcial_fee', 'inaccessble', 'return_address', 'creadtedAt')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 상품_id 를 통한 상품 찾기
const productionFindById = (id) => {
  if(isNaN(id)){
    return Promise.reject('id의 값이 숫자가 아닙니다.')
  }

  const productionTypeNumberId = +id;

  return db(ACCOUNT)
      .select('*')
      .where('id', productionTypeNumberId)
      .then(([item]) => item)
}

//상품 등록 
const productionPost = (productionDetail) => {
  if(!productionDetail){
    return Promise.reject('productionDetail의 값이 없습니다.')
  }

  return db(ACCOUNT)
      .insert(productionDetail)
}

module.exports = {
  productionList,
  productionFindById,
  productionPost
}