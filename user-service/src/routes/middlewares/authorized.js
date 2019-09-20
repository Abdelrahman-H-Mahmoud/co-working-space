const {decodeToken}=require('../../utils/token_managment');

module.exports = (req, res, next) => {
    console.log('Headers',req.headers)
    if(req.headers.authorization){
        const token =req.headers.authorization;
        console.log(token);
        const decodedUser=decodeToken(token);
        if(decodedUser){
            req.user=decodedUser;
            return next();
        }
        else{
            return res.status(401).json({message:"unauthorized"});
        }
    }else{
        return res.status(401).json({message:"unauthorized"});
    }
}