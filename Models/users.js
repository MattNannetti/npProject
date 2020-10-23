const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    username:  {type: String, required: true},
    email: {type: String, required: true},
    pass1: {type: String, required: true},
    pass2: {type: String, required: true}

});


module.exports = mongoose.model('User', userSchema);