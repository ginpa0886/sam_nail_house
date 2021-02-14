const {Router} = require('express')
const service = require('../service/service')

const router = Router()

// 문의 List 조회 API
router.get('/list', async(req, res) => {
  const page = req.query.page === undefined ? 1 : +req.query.page
  const pageSize = req.query.pageSize === undefined ? 1 : +req.query.pageSize

  try{
    const questionLists = await service.questionList(page, pageSize)
    if(!questionLists){
      res.status(400).json({message: "문의 리스트가 존재하지 않습니다."})
    }
    res.status(200).json({questionLists})
  } catch(e) {
    res.status(400).json({e})
  }
})

// 문의 상세조회 API
router.get('/:id', async(req, res) => {
  const { id } = req.params
  if(!id && isNaN(id)){
    res.status.json({message: "id 값이 없습니다."})
  }

  try{
    const questionById = await service.questionFindById(id)
    if(!questionById){
      res.status(400).json({message: "해당 문의는 존재하지 않습니다."})
    }
    res.status(200).json({questionById})
  } catch(e){
    res.status(400).json({e})
  }
})

// 문의 등록 API
router.post('/', async(req, res) => {
  const { user_question_id, production_question_id, option_question_id, type, option, secret, text, answer, answer_text } = req.body

  if(!user_question_id || isNaN(user_question_id)){
    res.status.json({message: "user_question_id 값이 올바르지 않습니다."})
  }
  if(!production_question_id || isNaN(production_question_id)){
    res.status.json({message: "production_question_id 값이 올바르지 않습니다."})
  }
  if(!option_question_id || isNaN(option_question_id)){
    res.status.json({message: "option_question_id 값이 올바르지 않습니다."})
  }
  if(!type){
    res.status.json({message: "type 값이 올바르지 않습니다."})
  }
  if(!option){
    res.status.json({message: "option 값이 올바르지 않습니다."})
  }
  if(!secret){
    res.status.json({message: "secret 값이 올바르지 않습니다."})
  }
  if(!text){
    res.status.json({message: "text 값이 올바르지 않습니다."})
  }
  if(!answer){
    res.status.json({message: "answer 값이 올바르지 않습니다."})
  }
  if(!answer_text){
    res.status.json({message: "answer_text 값이 올바르지 않습니다."})
  }

  const questionData = {
    user_question_id, production_question_id, option_question_id, type, option, secret, text, answer, answer_text
  }

  try{
    await service.questionCreate(questionData)
    res.status.json({message: "문의를 등록하였습니다."})
  } catch(e){
    res.status(400).json({e})
  }
})

// 문의 수정 API
router.patch('/:id')

// 문의 삭제 API
router.delete('/:id')


module.exports = router