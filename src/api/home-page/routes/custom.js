module.exports = {
    routes:[
        {
            method:'POST',
            path:'/contact-us',
            handler:'home-page.contactUs ',
            config:{
                auth:false
            }
        }
    ]
}