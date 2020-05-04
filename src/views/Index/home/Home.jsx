import React, { Component } from 'react'
import MiHeadSearch from "./components/Search"
import MiHeadNav from "./components/Nav"
import { HomeContainer } from "./Home.style"
import {get} from "utils/http"


import Recommend from "./recommend/Recommend"
import MiPhone from "./miphone/Miphone"
import MiCapacity from "./micapacity/Micapacity"
import Mitelavision from "./mitelavision/Mitelavision"
import Minote from "./minote/Minote"
import Mielectrical from "./mielectrical/Mielectrical"
import Mirim from "./mirim/Mirim"

import { withRouter,Route,Redirect} from "react-router-dom"
class Home extends Component {
    constructor(){
        super();
        this.state={
            Swiperlist:[],
        }
    }
    handleChange=(type)=>{
        this.props.history.push(this.props.match.path+"/Home/"+type)
    }
    render() {
        let paths = this.props.match.path+"/Home/";
        return (
            
            <HomeContainer>
                <div className="miHome">
                    <div className="miHead">
                        <MiHeadSearch></MiHeadSearch>
                        <MiHeadNav paths={this.handleChange}></MiHeadNav>
                    </div>
                    <div className="miMain">
                        <Route path={paths+'mihome'} component={Recommend}></Route>
                        <Route path={paths+'miphone'} component={MiPhone}></Route>
                        <Route path={paths+'micapacity'} component={MiCapacity}></Route>
                        <Route path={paths+'mitelavision'} component={Mitelavision}></Route>
                        <Route path={paths+'minote'} component={Minote}></Route>
                        <Route path={paths+'mielectrical'} component={Mielectrical}></Route>
                        <Route path={paths+'mirim'} component={Mirim}></Route>

                    </div>
                </div>
            </HomeContainer>
           
        )
    }

    async getSwiperlist(){
        let result = await get("/api/miSwiper");
        this.setState({
            Swiperlist:result.data
        })
    }
    componentDidMount(){
        this.getSwiperlist();
    }
}
export default withRouter(Home)