const bcrypt = require("bcrypt");
const User = require('../models').User;


const newUser = function(req, res){
  res.render('users/new')
}

const create = async function(req, res){
  const salt = await bcrypt.genSalt(10);
  var usr = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt)
  };
  created_user = await User.create(usr);
  if(req.headers.content_type == 'application/json'){
      res.status(201).json(created_user);
    } else
    req.flash('success_msg','User details are added successfully!');
    res.redirect('/api/users/');
  
}

const login = async function(req, res){
  const user = await User.findOne({ where : {email : req.body.email }});
  if(user){
   const password_valid = await bcrypt.compare(req.body.password,user.password);
   if(password_valid){
     req.session.loggedIn = user.id;
     req.flash('success_msg','You have now login!')
     res.redirect('/api/users/')
   } else {
    req.flash('error_msg','Invalid Credentials!')
    res.redirect('/')
  }

}else{
  req.flash('error_msg','Invalid Credentials!')
  res.redirect('/');
}
}

const current_user = async function(req, res){
  const user_id = req.session.loggedIn ? req.session.loggedIn : req.query.id;
  try {
    let user = await User.findOne({where:{id : user_id},attributes:{exclude:["password"]}});
    if(user === null){
      res.render('index')
    } else
    res.render('users/show',{ user: user });
  } catch(err){
    res.status(401).json({"msg":"Couldnt Authenticate"});
  }
}

const logout = async function(req, res){
  req.flash('success_msg','You have now logged out!')
  req.session.destroy();
  res.redirect('/');
}

const index = async function(req, res){
  try{
    const users = await User.findAll({ attributes:{exclude:["password"]}});
    res.render('users/index',{ users: users });
  } catch(e){
    res.status(401).json({"msg":"Couldnt Authenticate"});
  }
}

const drop = async function(req, res){
  try{
    const users = await User.destroy({ where : { id: req.params.id }  });
    req.flash('success_msg','User details are removed successfully!')
    res.redirect('/api/users/');
  } catch(e){
    res.status(401).json({"msg":"Couldnt Authenticate"});
  }
}

module.exports ={
  create,
  login,
  current_user,
  logout,
  index,
  drop,
  newUser
}