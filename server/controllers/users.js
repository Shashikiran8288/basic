const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models').User;

const create = async function(req, res){
    const salt = await bcrypt.genSalt(10);
    var usr = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      password : await bcrypt.hash(req.body.password, salt)
    };
    created_user = await User.create(usr);
    res.status(201).json(created_user);
}

const login = async function(req, res){
    const user = await User.findOne({ where : {email : req.body.email }});
    if(user){
       const password_valid = await bcrypt.compare(req.body.password,user.password);
       if(password_valid){
           token = jwt.sign({ "id": user.id, "email" : user.email,"first_name":user.first_name },process.env.SECRET);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ error : "Password Incorrect" });
       }
     
    }else{
       res.status(404).json({ error : "User does not exist" });
     }
}

const current_user = async function(req, res){
    try {
        let token = req.headers['authorization'].split(" ")[1];
        req.user = jwt.verify(token,process.env.SECRET);
        let user = await User.findOne({where:{id : req.user.id},attributes:{exclude:["password"]}});
        if(user === null){
            res.status(404).json({'msg':"User not found"});
        }
        res.status(200).json(user);
    } catch(err){
        res.status(401).json({"msg":"Couldnt Authenticate"});
    }
}


module.exports ={
    create,
    login,
    current_user
}