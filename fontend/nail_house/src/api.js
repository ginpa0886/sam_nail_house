import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3003/"
})

export const productionApi = {
    ProductionInfo: id => api.get(`production/${id}`)
    
}

