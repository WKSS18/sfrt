import Mock from 'mockjs'

// 随机生成1000条的模拟数据
Mock.mock('/apis/search', 'post', (options) => {
    
    return Mock.mock({
        code: 1,
        'list|1000': [{
            'id|+1': 1,
            'title': "@ctitle(3,7)",
        }],
        'keywords':JSON.parse(options.body).params.keywords
    })
})