import api from "../api/api";


const getPrediction = data => {
    return api.post('/predict', data)
}

export default {
    getPrediction
}