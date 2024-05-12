import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/v1/blog',
    timeout: 5000
})

export const getPublications = async () => {
    try{
        return await apiClient.get('/publication/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const commentPost = async (data) => {
    try{
        return await apiClient.post('/comment/', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const commentsGet = async () => {
    try{
        return await apiClient.get('/comment/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const commentPut = async (data) => {
    try{
        return await apiClient.put('/comment/', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const commentDelete = async (commentId) => {
    try{
        return await apiClient.delete('/comment/', commentId)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if(responseStatus){
        (responseStatus === 401 || responseStatus === 403) && logout
    }
}
