const db = require('../../../helper/db')

const ACCOUNT = 'user'

// 유저 목록 조회 
const userList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pagesize의 값이 숫자가 아닙니다.')
  }

  return db(ACCOUNT)
      .select('email', 'pw', 'nickname', 'createdAt', 'enabled')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 유저 생성 
const userCreate = user => {
  return db(ACCOUNT)
      .insert(user)
}

// 유저를 ID로 찾는 함수
const userFindById = (id) => {
  return db(ACCOUNT)
      .select('*')
      .where('production_id', id)
      .then(([item]) => item)
}

// 유저를 Email로 찾는 함수
const userFindByEmail = email => {
  return db(ACCOUNT)
      .select('*')
      .where('email', email)
      .then(([item]) => item)
}

// 유저 정보 수정
const userUpdate = (userChange) => {
  return db(ACCOUNT)
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
  return db(ACCOUNT)
    .where('production_id', id)
    .update({
      updatedAt: new Date(),
      enabled: false
    })
}

module.exports = {
  userList,
  userCreate,
  userFindById,
  userFindByEmail,
  userUpdate,
  userDelete
}