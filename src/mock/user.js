import Mock from 'mockjs'
var userMsg = {
    username:"admin",
    password:"123"
}
Mock.mock('/api/login','post',(login)=>{
    let users = JSON.parse(login.body);
    users.username = users.username.trim();
    if(users.username === userMsg.username){
        if(users.password === userMsg.password){
            return Mock.mock({
                code:1,
                message:"登录成功",
                url:"Random.image()"
            })
        }else{
            return Mock.mock({
                code:-2,
                message:"密码错误"
            })
        }
    }else{
        return Mock.mock({
            code:-1,
            message:"用户名错误"
        })
    }

})

// 退出登录
Mock.mock('/api/logout','get',(logout)=>{
    return {
        code:1,
        message:"退出成功"
    }
})