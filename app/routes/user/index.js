const {Router} = require('express');

const service = require('./user-service')
const {getSalt, getExpiredTime, getHash} =require('../lilb/hash')


const router = Router()

const connectStatus = {}

// 유저 목록 조회 API
router.get('/', async(req, res) => {
  const page = req.query.page === undefined ? 1 : +req.query.page
  const pageSize = req.query.pagesize === undefined ? 1 : +req.query.pagesize

  try{
    const userlist = await service.userList(page, pageSize)

    res.status(200).json(userlist)
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
    connectStatus = {
      token, expired
    }

    res.status(200).json({
      token, expired
    })
  } catch(e){
    res.status(400).json({e})
  }
})

module.exports = router