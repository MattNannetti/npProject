const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');


router.get('/', (req, res) =>{
    res.render('./views/signin');
});

router.get('/:username', userController.findUser);


module.exports = router;