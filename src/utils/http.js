import axios from "axios"
const get  = (url,params)=>{
    return axios.get(url,{params})
}

const post = (url,params)=>{
    return axios.post(url,params)
}
export {
    get,
    post
}