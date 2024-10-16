module.exports = {
    routes:[
        {
            method:'GET',
            path:'/custom',
            handler:'home-page.customAction ',
            config:{
                auth:false
            }
        }
    ]
}