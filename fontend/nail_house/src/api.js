import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3003/"
})

export const testApi = {
    ProductionInfo: id => api.get(`production/${id}`)
    
}

