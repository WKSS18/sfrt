import axios from "axios"
const get  = (url,params)=>{
    return axios.get(url,{params})
}

const post = (url,params)=>{
    console.log(params)
    return axios.post(url,params)
}
export {
    get,
    post
}