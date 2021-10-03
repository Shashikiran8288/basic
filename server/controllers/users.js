const User = require('../models').User;
const bcrypt = require('bcrypt');


const login = function (req, res) {
  
  return User.findOne({
      where: {
        email: req.body.email
      }
    }).then((userRecord) => {
      if (userRecord) {
        const matched = bcrypt.compare(req.body.password, userRecord.encryptedPassword);
        if (matched) {
          return res.redirect('/admin/resources/Products');
        }
        throw ({
          message: "Invalid login"
        })
      }
      throw ({
        message: "Invalid User"
      })
    })
    .catch(error => res.status(400).send(error.toString()));
}



module.exports = {
  login
}