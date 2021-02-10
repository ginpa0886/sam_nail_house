const {Router} = require('express');

const service = require('./user-service')
const {getSalt, getExpiredTime, getHash} =require('../lilb/hash')

const router = Router()

const connectStatus = {}

// 유저 목록 조회 API
router.get('/', async(req, res) => {
  const page = req.query.page === undefined ? 1 : +req.query.page
  const pageSize = req.query.pageSize === undefined ? 1 : +req.query.pageSize
  
  try{
    const userlist = await service.userList(page, pageSize)
    res.status(200).json({userlist})
  } catch(e){
    res.status(400).json({e})
  }
})

// 유저 생성 API
router.post('/', async(req, res) => {
  const { email, pw, nickname, profile } = req.body

  if(!email){
    res.status(400).json({message: `"email이 입력되지 않았습니다.`})
  }
  if(!pw){
    res.status(400).json({message: `"pw이 입력되지 않았습니다.`})
  }
  if(!nickname){
    res.status(400).json({message: `"nickname이 입력되지 않았습니다.`})
  }
  try{
    const salt = getSalt()
    const user = {
      email,
      salt,
      pw: getHash(pw, salt),
      nickname,
      profile,
    }

    await service.userCreate(user)
    res.status(200).json({ message:
      "유저 등록이 완료되었습니다."
    })
  } catch(e){
    res.status(400).json({e})
  } 
})

// 유저 로그인 API
router.post('/signin', async(req, res) => {
  const { email, pw } = req.body

  if(!email){
    res.status(400).json({message: `"email이 입력되지 않았습니다.`})
  }
  if(!pw){
    res.status(400).json({message: `"pw이 입력되지 않았습니다.`})
  }

  try{
    const userByEmail = await service.userFindByEmail(email)

    if(userByEmail.pw !== getHash(pw, userByEmail.salt)){
      res.status(400).json({message: `"입력한 정보가 올바르지 않습니다.`})
    }

    const token = getSalt()
    const expired = getExpiredTime()
    connectStatus[userByEmail.id] = {
      token, expired
    }

    res.status(200).json({
      token, expired
    })
  } catch(e){
    res.status(400).json({e})
  }
})

// 유저 로그인 확인 미들웨어
router.use('/:id', (req, res) => {
  const { id } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "id 정보가 옳바르지 않습니다."})
  }
  const connection = connectStatus[id]
  if(!connection){
    res.status(401).json({message: '해당 계정의 로그인 기록이 없습니다.'})
    return
  }

  const token = req.header['_token_']
  if (!token) {
    res.status(401).json({message: 'token 정보를 입력해주세요.'})
    return
  }

  if(token !== connectStatus.token){
    res.status(401).json({message: 'token의 값이 올바르지 않습니다.'})
    return
  }

  if(Date.now() > connection.expired){
    res.status(401).json({message: '해당 계정의 로그인 접속시간이 만료되었습니다.'})
    return
  }

  connection.expired = getExpiredTime();
  next()
})

// 유저 상세 조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "id 정보가 옳바르지 않습니다."})
  }
  try{
    const userData = await service.userFindById(id)
    if(userData){
      res.status(200).json({userData})
    }else{
      res.status(400).json({message: "id의 해당하는 유저 정보가 없습니다."})
    }
  } catch(e){
    res.status(400).json({e})
  }
})

// 유저 수정 API
router.patch('/:id', async(req, res) => {
  const { id, email, pw, nickname, profile } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "정보가 올바르지 않습니다."})
  }

  try{
    const userData = await service.userFindById(id)

    if(email === userData.email || !email){
      res.status(400).json({message: "pw정보가 올바르지 않습니다."})
    }
    if(pw === userData.pw || !pw){
      res.status(400).json({message: "pw정보가 올바르지 않습니다."})
    }
    if(nickname === userData.nickname || !nickname){
      res.status(400).json({message: "nickname정보가 올바르지 않습니다."})
    }
    if(profile === userData.profile || !profile){
      res.status(400).json({message: "profile정보가 올바르지 않습니다."})
    }
    const salt = getSalt();

    const userChange = {
      id,
      email,
      salt,
      pw: getHash(pw, salt),
      nickname,
      profile
    }

    await service.userUpdate(userChange)
    res.status(200).json({message: "유저 정보가 수정되었습니다."})
  } catch(e){
    res.status(400).json({e})
  }
})

// 유저 삭제(비활성화) API
router.delete('/:id', async(req, res) => {
  const { id } = req.params
  if(!id || isNaN(id)){
    res.status(400).json({message: "id값이 올바르지 않습니다."})
  }

  try{
    const userData = await service.userFindById(id)
    if(!userData){
      res.status(400).json({message: "유저 정보가 없습니다."})
    }
    await service.userDelete(userData.id)
    res.status(200).json({message: "user가 비활성화 되었습니다."})
  } catch(e){
    res.status(400).json({e})
  }
})

module.exports = router