const User = require('../models/users');



// CREATE/ADD USER TO DB
exports.createUser = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        pass1: req.body.pass1,
        pass2: req.body.pass2
    });

    user.save().then(
        () => {
            res.redirect('/signin')
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
}


// GET/FIND USER IN DB
exports.findUser = (req, res, next) => {
    User.findOne({
        _username: req.body.username,
    }).then(
        (user) => {
            res.status(200).json(user);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            })
        }
    )
    
};