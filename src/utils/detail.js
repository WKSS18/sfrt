import {get,post} from './http'

export const getDetailproduct =(params)=>{
    let url = "/apilist/v1/miproduct/view";
    return post(url,params);
}