const bcrypt = require('bcryptjs');
const saltBcrypt = bcrypt.genSaltSync(10);

module.exports = {bcrypt, saltBcrypt}