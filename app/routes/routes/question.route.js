const {Router} = require('express')
const service = require('../service/service')

const router = Router()


// 문의 조회 API
router.get('/:id', (req, res) => {
  const { id } = req.params
  if(!id && isNaN(id)){
    res.status.json({message: "id 값이 없습니다."})
  }
})

// 문의 등록 API
router.post('/:id', (req, res) => {
  if(!id && isNaN(id)){
    res.status.json({message: "id 값이 없습니다."})
  }
})

// 문의 수정 API
router.patch('/:id')

// 문의 삭제 API
router.delete('/:id')


module.exports = router