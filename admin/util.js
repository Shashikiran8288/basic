// const bcrypt = require('bcrypt');
// const { User } = require('../server/models');
// const redis = require('redis');
// const session = require('express-session');
// let RedisStore = require('connect-redis')(session);
// let redisClient = redis.createClient();

// const sessionStorage = {
//   store: new RedisStore({
//     client: redisClient
//   }),
//   secret: 'United we stand, divided we fall',
//   resave: false,
// };


// async function authenticate(email, password) {
//     const userRecord = await User.findOne({
//       where: { email }
//     });
//     if (userRecord) {
//       const matched = await bcrypt.compare(password, userRecord.encryptedPassword);
//       if (matched) {
//         return userRecord;
//       }
//     }
//     return false;
//   }
//   module.exports = {
//   authenticate,
//   sessionStorage,
//   };