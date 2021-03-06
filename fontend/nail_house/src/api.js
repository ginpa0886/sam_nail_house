import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3003/"
})



export const SetHeaderToken = (token) => {
  api.defaults.headers.common['_token_'] = token
  console.log("SetHeaderToken 함수 실행됨");
}

export const productionApi = {
    ProductionInfo: id => api.get(`production/${id}`),
    ProductionCart: (user_cart_id, production_cart_id, option_cart_id, amount) => api.post('cart/', {
      user_cart_id,
      production_cart_id,
      option_cart_id,
      amount
    }),
    ProductionOrder: (user_order_id, production_order_id, option_order_id, amount) => api.post('order/', {
      user_order_id,
      production_order_id,
      option_order_id,
      amount
    }),
    WriteReview: () => api.post('production_reviews/', {

    }),
    reviewGood: (inReviewId, inGood) => api.patch(`production_reviews/good`, {
      inReviewId, inGood
    })
}

export const userApi = {
    UserSignin: (email, pw, nickname) => api.post('user/new', {
      email, pw, nickname
    }),
    UserLogin: (email, pw) => api.post('user/signin', {
      email, pw
    }),
    UserCheck: (id, token) => api.get(`user/${id}`, {
      headers: {'_token_': token}
    }),
    UserCart: (id) => api.get(`cart/${id}`),
    UserCartRemove: (id, removeArray) => api.delete(`cart/${id}`, {params: {
      removeArray
    }}),
    UserWriteReview : (id) => api.post(``),
    UserWriteQuestion: (user_question_id, production_question_id, option_question_id, type, option, secret, text) => api.post('production_question/', {
      user_question_id, production_question_id, option_question_id, type, option, secret, text
    })
  }

