const express = require('express');
const router = express.Router();
const axios = require('axios');
/*
router.get('/', (req, res) =>{
    res.render('./views/index');
    console.log('hi');
});
*/

router.get('/',async(req, res) => {
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
    res.render('./views/index', { articles: newsAPI.data} );
});



module.exports = router;