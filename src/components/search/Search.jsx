import React, { Component } from 'react'
import { post } from "utils/http"
import axios from "axios"
export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            keywords: ""
        }
    }
    render() {
        return (
            <div className="miSearch">
                search
            </div>
        )
    }
    async getSearch() {
        // var lists = new FormData();
        // lists.append('client_id', '180100031051');
        // lists.append('channel_id', '');
        // lists.append('webp', '1');
        // lists.append('query', '手机');

        // let result = await post('/apilist/v1/hisearch/suggestion_v3',
        //     lists
        // )
        // console.log(result);

        // let res = await axios({
        //     url:"/apilist/v1/hisearch/suggestion_v3",
        //     data:lists,
        //     method:'post',
        //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
        // })
        // console.log(res);


        let lists = new URLSearchParams()
        lists.append('client_id', '180100031051');
        lists.append('channel_id', '');
        lists.append('webp', '1');
        lists.append('query', '手机');
        // document.cookie="mstuid=1588862238389_8635; xmuuid=XMGUEST-A8FC69E0-90BB-11EA-9EA7-43E9D6E5227D; XM_agreement=0; lastsource=www.baidu.com; Hm_lvt_c3e3e8b3ea48955284516b186acf0f4e=1588911450,1588928599,1588938455,1588947104; Hm_lpvt_c3e3e8b3ea48955284516b186acf0f4e=1588947104; Hm_lvt_183aed755f0fd3efc9912dbf6550ec49=1588911555,1588928603,1588938458,1588947108; log_code=b8e4456b21f33db1-8bc2ac9505456527|https%3A%2F%2Fm.mi.com%2Fsearch%2Flist%3Fkey%3D%25E6%2588%2591%25E7%259A%2584; pageid=13c7dea5c88bfe74; msttime=https%3A%2F%2Fm.mi.com%2Fsearch; msttime1=https%3A%2F%2Fm.mi.com%2Fsearch; Hm_lpvt_183aed755f0fd3efc9912dbf6550ec49=1588947139; mstz=||31875433.13|||; xm_vistor=1588862238389_8635_1588947104466-1588947140351";
        axios.defaults.withCredentials=true;
        axios({
            method: 'post',
            url: '/apilist/v1/hisearch/suggestion_v3',
            data: lists,
            headers:{
                "Cookie":"mstuid=1588862238389_8635; xmuuid=XMGUEST-A8FC69E0-90BB-11EA-9EA7-43E9D6E5227D; XM_agreement=0; lastsource=www.baidu.com; Hm_lvt_c3e3e8b3ea48955284516b186acf0f4e=1588911450,1588928599,1588938455,1588947104; Hm_lpvt_c3e3e8b3ea48955284516b186acf0f4e=1588947104; Hm_lvt_183aed755f0fd3efc9912dbf6550ec49=1588911555,1588928603,1588938458,1588947108; log_code=b8e4456b21f33db1-8bc2ac9505456527|https%3A%2F%2Fm.mi.com%2Fsearch%2Flist%3Fkey%3D%25E6%2588%2591%25E7%259A%2584; pageid=13c7dea5c88bfe74; msttime=https%3A%2F%2Fm.mi.com%2Fsearch; msttime1=https%3A%2F%2Fm.mi.com%2Fsearch; Hm_lpvt_183aed755f0fd3efc9912dbf6550ec49=1588947139; mstz=||31875433.13|||; xm_vistor=1588862238389_8635_1588947104466-1588947140351",
                "Content-Length":"500"
            }
        }).then(res=>{
            console.log("res22",res);
        })

        // axios.post('/apilist/v1/hisearch/suggestion_v3',
        //     {
        //         data:lists
        //     }
        // ,{
        //     headers:{
        //         "Cookie":"mstuid=1588862238389_8635; xmuuid=XMGUEST-A8FC69E0-90BB-11EA-9EA7-43E9D6E5227D; XM_agreement=0; lastsource=www.baidu.com; Hm_lvt_c3e3e8b3ea48955284516b186acf0f4e=1588911450,1588928599,1588938455,1588947104; Hm_lpvt_c3e3e8b3ea48955284516b186acf0f4e=1588947104; Hm_lvt_183aed755f0fd3efc9912dbf6550ec49=1588911555,1588928603,1588938458,1588947108; log_code=b8e4456b21f33db1-8bc2ac9505456527|https%3A%2F%2Fm.mi.com%2Fsearch%2Flist%3Fkey%3D%25E6%2588%2591%25E7%259A%2584; pageid=13c7dea5c88bfe74; msttime=https%3A%2F%2Fm.mi.com%2Fsearch; msttime1=https%3A%2F%2Fm.mi.com%2Fsearch; Hm_lpvt_183aed755f0fd3efc9912dbf6550ec49=1588947139; mstz=||31875433.13|||; xm_vistor=1588862238389_8635_1588947104466-1588947140351"
        //     }
        // }).then(res=>{
        //     console.log('res',res)
        // })
    }



    componentDidMount() {
        this.getSearch();
    }
}
