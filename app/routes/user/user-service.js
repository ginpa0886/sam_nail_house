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

const userFindByEmail = email => {
  return db(ACCOUNT)
      .select('salt', 'pw', 'nickname')
      .where('email', email)
      .then(([item]) => item)
}

module.exports = {
  userList,
  userCreate
  

}