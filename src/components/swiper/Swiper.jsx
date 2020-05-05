import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
export default class Swiper extends Component {
    constructor(){
        super();
        this.state={
            imgHeight: 176,
        }
    }
    render() {
        return (
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.props.list.map(item => (
                        <a
                            key={item.id}
                            href=" "
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${item.img_url}`}
                                alt="1"
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
        
        )
    }
   
}
