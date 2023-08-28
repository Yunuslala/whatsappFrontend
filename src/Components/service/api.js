import axios from "axios"

export const getConversations=async(id)=>{
    try {
        const response=await fetch(`http://localhost:4500/particularConversations/${id}`);
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


export const uploadFiles=async(payload)=>{
    try {
        const response=axios.post(`http://localhost:4500/post/image/files`,  payload);
        return response
    } catch (error) {
        console.log(error)
    }
}