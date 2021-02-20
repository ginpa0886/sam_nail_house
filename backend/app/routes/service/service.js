const db = require('../../../helper/db')

const User = 'user'
const Brand = 'brand'
const Category = 'category'
const Production = 'production_detail'
const Option = 'production_option'
const Review = 'review'
const Question = 'question'
const Cart = 'cart'
const Order = 'order'

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
      .where('user_id', id)
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
    .where('user_id', userChange.id)
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
    .where('user_id', id)
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
      .select('*')
      .innerJoin(Brand, 'production_brand_id', 'brand_id')
      .innerJoin(Category, 'production_category_id', 'category_id')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 상품_id 를 통한 상품 Detail

const testInnerjoin = (id) => {
  return db(Production)
      .select('*')
      .innerJoin(Option, 'production_option_id', id)
      
}


const productionFindById = (id) => {
  const productionTypeNumberId = +id;

  return db(Production)
      .select('*')
      .where('production_id', productionTypeNumberId)
      .then(([item]) => item)
}

// 특정 brand 조회
const brandByProductionId = (brandId) => {
  return db(Brand)
      .select('*')
      .where('brand_id', brandId)
      .then(([item]) => item)
}

// 특정 category 조회
const categoryByProductionId = (categoryId) => {
  return db(Category)
      .select('*')
      .where('category_id', categoryId)
      .then(([item]) => item)
}


// 특정 option 조회
const optionByProductionId = (id) => {
  return db(Option)
      .select('*')
      .andWhere('production_option_id', id)
}

// option 조회 ( 단일 )
const optionById = (id) => {
  return db(Option)
    .select('*')
    .andWhere('option_id', id)
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


// 리뷰 리스트 조회
const reviewList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(Review)
    .select('*')
    .limit(pageSize)
    .offset((page - 1) * pageSize)
}

// 리뷰 ID 상세조회
const reviewFindById = (id) => {
  const typeId = +id;
  return db(Review)
      .select('*')
      .where('review_id', typeId)
      .then(([item]) => item)
}

// 리뷰 별점 조회
const findStarById = (id) => {
  return db(Review)
      .select('rating')
      .where('production_re_id', id)
}

// 리뷰 등록
const reviewCreate = (reviewData) => {
  return db(Review)
    .insert(reviewData)
}

// --------------------------------

// 문의 목록 조회 
const questionList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(Question)
      .select('*')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 문의 ID 상세조회
const questionFindById = (id) => {
  const typeId = +id;
  return db(Question)
      .select('*')
      .where('question_id', typeId)
      .then(([item]) => item)
}


// 문의 등록
const questionCreate = (reviewData) => {
  return db(Review)
    .insert(reviewData)
}

// --------------------------------------

// 바로구매 List 조회
const orderList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(Order)
      .select('*')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}


// 바로구매 상세 조회
const orderFindById = (id) => {
  const typeId = +id

  return db(Order)
      .select('*')
      .where('order_id', typeId)
      .then(([item]) => item)
}

// 바로구매 등록
const orderCreate = (cartDetail) => {
  return db(Order)
      .insert(cartDetail)
}

// -----------------------------------

// 장바구니 List 조회

const cartList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(Cart)
      .select('*')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 장바구니 상세 조회
const cartFindById = (id) => {
  const typeId = +id

  return db(Cart)
      .select('*')
      .where('cart_id', typeId)
      .then(([item]) => item)
}

// 장바구니 등록
const cartCreate = (cartDetail) => {
  return db(Cart)
      .insert(cartDetail)
}

// ---------------------------------

// 해당 상품 별점 조회
const starCount = (stars) => {
  const starForCount = {
    count1:0,
    count2:0,
    count3:0,
    count4:0,
    count5:0,
  }
  
  const userStarArray = stars
  
    for(let i = 0; i < stars.length; i++){
      const userStar = userStarArray[i].rating
      switch(userStar){
        case 1:
          starForCount.count1++;
          break;
        case 2:
          starForCount.count2++;
          break;
        case 3:
          starForCount.count3++;
          break;
        case 4:
          starForCount.count4++;
          break;
        case 5:
          starForCount.count5++;
          break;
        default:
          starForCount.count3++;
          break;
      }
    }
    return starForCount
}

// 배송 정보 조회
const findDeliveryInfo = (id) => {
  return db(Production)
      .select('type', 'free', 'fee', 'return_fee', 'exchange_fee', 'special_fee', 'delivery_to_capital', 'delivery_to_backwoods','delivery_to_jeju', 'return_address')
      .where('production_id', id)
      .then(([item]) => item)
      
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
  brandByProductionId,
  categoryByProductionId,
  optionByProductionId,
  optionById,
  productionPost,
  reviewList,
  reviewFindById,
  findStarById,
  reviewCreate,
  questionList,
  questionFindById,
  questionCreate,
  orderList,
  orderFindById,
  orderCreate,
  cartList,
  cartFindById,
  cartCreate,
  starCount,
  findDeliveryInfo,
  testInnerjoin
}