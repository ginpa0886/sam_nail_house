const db = require('../../../helper/db')

const User = 'user'
const Production = 'production_detail'
const Option = 'production_option'
const Review = 'review'

// 유저 목록 조회 
const userList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(User)
      .select('email', 'pw', 'nickname', 'createdAt', 'enabled')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 유저 생성 
const userCreate = user => {
  return db(User)
      .insert(user)
}

// 유저를 ID로 찾는 함수
const userFindById = (id) => {
  return db(User)
      .select('*')
      .where('production_id', id)
      .then(([item]) => item)
}

// 유저를 Email로 찾는 함수
const userFindByEmail = email => {
  return db(User)
      .select('*')
      .where('email', email)
      .then(([item]) => item)
}

// 유저 정보 수정
const userUpdate = (userChange) => {
  return db(User)
    .where('production_id', userChange.id)
    .update({
      email: userChange.email,
      salt: userChange.salt,
      pw: userChange.pw,
      nickname: userChange.nickname,
      profile: userChange.profile,
      updatedAt: new Date()
    })
}

// 유저 삭제(비활성화)
const userDelete = (id) => {
  return db(User)
    .where('production_id', id)
    .update({
      updatedAt: new Date(),
      enabled: false
    })
}

// ---------------------------------------------

// 상품 리스트
const productionList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(Production)
      .innerJoin()
      .select('b0rand_id', 'category_id', 'name', 'price', 'sale', 'point', 'type', 'free', 'fee', 'return_fee', 'exchange_fee', 'spcial_fee', 'inaccessble', 'return_address', 'creadtedAt')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 상품_id 를 통한 상품 Detail
const productionFindById = (id) => {
  if(isNaN(id)){
    return Promise.reject('id의 값이 숫자가 아닙니다.')
  }
  const productionTypeNumberId = +id;

  return db(Production)
      .select('*')
      .where('production_id', productionTypeNumberId)
      .then(([item]) => item)
}

// 상품의 option 조회
const productionOptionById = (production_id) => {
  if(isNaN(production_id)){
    return Promise.reject('production_id 값이 숫자가 아닙니다.')
  }
  const productionTypeNumberId = +production_id;

  return db(Production)
      .select('*')
      .innerJoin(Option, 'production_id', 'production_option_id')
      .where('production_id', productionTypeNumberId)
}

//상품 등록 
const productionPost = (productionDetail) => {
  if(!productionDetail){
    return Promise.reject('productionDetail의 값이 없습니다.')
  }

  return db(Production)
      .insert(productionDetail)
}

// --------------------------------------------


// 리뷰 ID 조회
const reviewFindById = (id) => {
  const typeId = +id;
  return db(Review)
      .select('*')
      .where('review_id', typeId)
}

const foreignKeyFindByProductionId = () => {

  return db(`${id}`)
}

const reviewCreate = (id) => {
  return db(Review)
    .insert()
}

module.exports = {
  userList,
  userCreate,
  userFindById,
  userFindByEmail,
  userUpdate,
  userDelete,
  productionList,
  productionFindById,
  productionPost,
  productionOptionById,
  reviewFindById,
  reviewCreate,
  foreignKeyFindByProductionId
}