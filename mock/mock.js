const miNav  = require("./miNav.json");
const miSwiper = require("./swiper.json");
const daily = require('./daily.json');
const detailProduct = require('./detailProduct.json');
const goods = require('./goods.json');
const classify = require('./classify.json');
module.exports = ()=>{
    return {
        miNav,
        miSwiper,
        daily,
        detailProduct,
        goods,
        classify
    }
}