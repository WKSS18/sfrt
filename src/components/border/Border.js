import styled from 'styled-components'


// Comp传过来的组件
const Border = ({ Comp, bordercolor = "", radius = 0, borderwidth = '1px' }) => {

    return styled(Comp)`
    position: relative;
    &::before{
    content:" ";
    position:absolute;
    left:0px;
    top:0px;
    height: 100%;
    width: 100%;
    border-style:solid;
    border-color:${bordercolor};        
    border-width:${borderwidth};
    transform-origin:0 0;
    z-index:1;
    /* 不响应鼠标事件 */
    pointer-events:none;
    @media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
        /* 将内容放大 */
        height: 150%;
        width: 150%;
        /* 在进行缩放 */
        transform:scale(0.75);
        /* 圆角 */
        border-radius:${radius * 1.5}rem;
    }

    @media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
        height: 200%;
        width: 200%;
        transform:scale(0.5);
        border-radius:${radius * 2}rem;
    }

    @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
        height: 300%;
        width: 300%;
        transform:scale(0.333);
        border-radius:${radius * 3}rem;
    }
}
    `
}


export {
    Border
}