module.exports={
    port:process.env.PORT,
    mongoDB:{
        host:process.env.MONGO_DB_HOST,
        port:process.env.MONGO_DB_PORT,
        user:process.env.MONGO_DB_USER,
        password:process.env.MONGO_DB_PASSWORD,
        db_name:process.env.MONGO_DB_NAME
    },
    secert: process.env.SECRET,
    token_expiration: process.env.TOKEN_EXPIRATION

}