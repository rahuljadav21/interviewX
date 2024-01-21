const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {sign,verify} = require('jsonwebtoken');
const saltRounds = 10;
var {jwtDecode } = require('jwt-decode'); 


const createTokens = (user) => {
    const accessToken = sign(
      {userId:user._id,username: user.username, email: user.email },
      "jwtsecretplschange"
    );
  
    return accessToken;
  };
  
  const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
  
    if (!accessToken){
        //return res.status(400).json({ error: "User not Authenticated!" });
        res.redirect('/user/login');
    }
      
  
    try {
      const validToken = verify(accessToken, "jwtsecretplschange");
      if (validToken) {
        req.authenticated = true;
        return next();
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  };

const register = async(req,res) => {
    const user = new Admin({
        username : req.body.username,
        password : req.body.password
    })
    const pw = req.body.password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(pw, salt);
    user.password = hash
    await user.save()
    const accessToken = createTokens(user);
    res.cookie("access-token", accessToken, {
            maxAge:60 * 24 * 7 *60 * 1000,
            httpOnly: true,
        });
    res.json('registed successfully')
}

const login = async(req,res)=>{
    const user = await Admin.findOne({username : req.body.username});
    if(!user){
     res.send("Username or Password is Incorrect") 
    }else{
     const isAutherised = bcrypt.compareSync(req.body.password, user.password);
     if(isAutherised){
         const accessToken = createTokens(user);
         res.cookie("access-token", accessToken, {
             maxAge: 60 * 24 * 7 *60 * 1000,
             httpOnly: true,
         });
         res.header('Access-Control-Expose-Headers', 'Authorization');
         res.setHeader('Authorization', `${accessToken}`);
         
         res.json("logged In successfully")
       }else{
          res.status(403).send("Username or Password is Incorrect") 
       }
    }
   
 }

const logOut = async(req,res) =>{
    res.clearCookie('access-token');
    res.json("logged out successfully")
}

module.exports = { register,logOut,login}