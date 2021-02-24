import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3003/"
})

export const productionApi = {
    ProductionInfo: id => api.get(`production/${id}`)
    
}

export const userApi = {
    UserSignin: (email, pw, nickname) => api.post('user/new', {
      email, pw, nickname
    }),
    UserLogin: (email, pw) => api.post('user/signin', {
      email, pw
    })
}

