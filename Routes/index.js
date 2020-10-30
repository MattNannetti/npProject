const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/',async(req, res, next) => {
        
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
    res.render( { articles: newsAPI.data} );
    next();
});


router.get('/', (req, res) =>{
    res.render('./views/index');
    console.log('hi');
});







module.exports = router;