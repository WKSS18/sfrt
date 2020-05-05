import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'


import ClassifyActive from "assets/images/classify-active.png"
import Classify from "assets/images/classify.png"
import HomeActive from "assets/images/home-active.png"
import Home from "assets/images/home.png"
import NavigatorActive from "assets/images/navigator-active.png"
import Navigator from "assets/images/navigator.png"
import ProfileActive from "assets/images/profile-active.png"
import Profile from "assets/images/profile.png"
import ShopActive from "assets/images/shop-active.png"
import Shop from "assets/images/shop.png"


import HomeCon from "./home/Home"
import ClassifyCon from "./classify/Classify"
import NavigatorCon from "./navigator/Navigator"
import ShopCon from "./shop/Shop"
import ProfileCon from "./profile/Profile"

import "assets/styles/common.css"
import {Redirect} from "react-router-dom"
const datalist = [
    {
        id: "Home",
        title:"首页",
        icon: Home,
        iconActive: HomeActive,
        comp: HomeCon
    },
    {
        id: "Classify",
        title:"分类",
        icon: Classify,
        iconActive: ClassifyActive,
        comp: ClassifyCon
    },
    {
        id: "Navigator",
        title:"星球",
        icon: Navigator,
        iconActive: NavigatorActive,
        comp: NavigatorCon
    }, {
        id: "Shop",
        title:"购物车",
        icon: Shop,
        iconActive: ShopActive,
        comp: ShopCon
    },
    {
        id: "Profile",
        title:"我的",
        icon: Profile,
        iconActive: ProfileActive,
        comp: ProfileCon
    }
]
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "Home",
            hidden: false,
            datalist
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tintColor="#ff6e17"
                >
                    {
                        this.state.datalist.map((item, index) => {
                            return (
                                <TabBar.Item
                                    title={item.title}
                                    key={index}
                                    icon={<div style={{
                                        width: '24px',
                                        height: '24px',
                                        background: `url(${item.icon}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '24px',
                                        height: '24px',
                                        background: `url(${item.iconActive}) center center /  21px 21px no-repeat`
                                    }}
                                    
                                    />
                                   
                                    }
                                    selected={this.state.selectedTab === item.id}
                                    badge={item.id==='Shop' ? 1 : ""}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: item.id,
                                        });
                                        this.props.history.push("/index/"+item.id);
                                        if(item.id==="Home"){
                                            this.props.history.push('/index/'+item.id+'/mihome')
                                        }else if(item.id==='Profile'){
                                            console.log('dd')
                                            this.props.history.push('/login')
                                        }
                                    }}
                                    data-seed="logId"
                                >
                                {<item.comp></item.comp>}
                                </TabBar.Item>
                            )
                        }
                        )}
                </TabBar>
                <Redirect from="/index" to="/index/Home/mihome"></Redirect>
               
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props)
    }
}
