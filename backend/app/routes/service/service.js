const { innerJoin } = require('../../../helper/db')
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
const ProductionImg = 'production_image'
const UserPhoto = 'production_user_photo'

// 유저 목록 조회 
const userList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(User)
      .select('*')
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



const testInnerjoin = (id) => {
  return db(Production)
      .select('*')
      .innerJoin(Option, 'production_option_id', id)
      
}

// 상품_id 를 통한 상품 Detail
const productionFindById = (id) => {
  const productionTypeNumberId = +id;

  return db(Production)
      .select('*')
      .where('production_id', productionTypeNumberId)
      .then(([item]) => item)
}


// 상품 이미지 ID로 조회
const productionImageById = (id) => {
  return db(ProductionImg)
      .select("*")
      .where("production_image_id", id)
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

// 유저 포토 테이블 조회
const userPhotoByProductionId = (id) => {
  return db(UserPhoto) 
      .select('*')
      .where('production_photo_id', id)
}

const ReviewByProductionId = (id) => {
  return  db(Review) 
      .select('*')
      .where('production_re_id', id)
}

const reviewUser = (id) => {
  return db(User)
      .select("review_id","nickname", "profile", "email", "user_id", 'picture', 'text', 'rating', "good")
      .innerJoin(Review, "user_re_id", "user_id")
      .where('production_re_id', id)
}

const controllGood = (id, good) => {
  const typeId = +id;
  const typeGood = +good;

  console.log("service문 진입");
  return db(Review)
      .where('review_id', typeId)
      .update('good', typeGood)
}

const QuestionByProductionId = (id) => {
  return  db(User) 
      .select('nickname', 'type', 'option', 'text', 'secret', 'answer', 'answer_text')
      .innerJoin(Question, "user_question_id", "user_id")
      .where('production_question_id', id)
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
      .select('*', `${Review}.review_id`)
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

const orderFindPrice = (id) => {
  const typeId = +id

  return db(Option)
      .select('*')
      .where('option_id', typeId)
}

const orderFindForPrice = (id) => {
  const typeId = +id

  return db(Option)
      .select('*')
      .where('option_id', typeId)
}

// 바로구매 등록
const orderCreate = (cartDetail) => {
  return db(Order)
      .insert(cartDetail)
}

// -----------------------------------

// 장바구니 List 조회

const cartList = (page, pageSize, id) => {
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
      .andWhere('user_cart_id', id)
}

// 장바구니 상세 조회
const cartFindById = (id) => {
  const typeId = +id

  return db(Cart)
      .select("*", `${Cart}.enabled`)
      .innerJoin(Production, "production_id", "production_cart_id")
      .innerJoin(Option, "option_cart_id", "option_id")
      .innerJoin(Brand, "brand_id", "production_cart_id")
      .innerJoin(ProductionImg, "image_id", "production_cart_id")
      .where('user_cart_id', typeId)
      .andWhere(`${Cart}.enabled`, 1)
}

const cartDelete = (removeArray) => {
  const typeArray = removeArray.map(v => Number(v))
  
  // typeArray.map((value) => {
  //   return (  
  //     db(Cart)
  //     .where('cart_id', value)
  //     .update('enabled', 0)
  //   )  
    
  // })
  return db(Cart)
      .whereIn('cart_id', typeArray)
      .update('enabled', 0)
  
}

// 장바구니 total 가격 확인
const cartFindForPrice = (id) => {
  const typeId = +id

  return db(Option)
      .select('*')
      .where('option_id', typeId)
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
  productionImageById,
  brandByProductionId,
  categoryByProductionId,
  userPhotoByProductionId,
  ReviewByProductionId,
  QuestionByProductionId,
  optionByProductionId,
  reviewUser,
  optionById,
  productionPost,
  reviewList,
  reviewFindById,
  controllGood,
  findStarById,
  reviewCreate,
  questionList,
  questionFindById,
  questionCreate,
  orderList,
  orderFindById,
  orderFindPrice,
  orderFindForPrice,
  orderCreate,
  cartList,
  cartFindById,
  cartFindForPrice,
  cartCreate,
  starCount,
  findDeliveryInfo,
  testInnerjoin,
  cartDelete
}