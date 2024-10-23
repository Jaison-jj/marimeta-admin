module.exports = {
    routes:[
        {
            method:'POST',
            path:'/send-photos',
            handler:'welcome-marimeta-alumnus.sendPhotos ',
            config:{
                auth:false
            }
        }
    ]
}