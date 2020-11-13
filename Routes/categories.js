const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) =>{
    res.render('./views/categories');
});

router.post('',async(req, res) => {
    const search = req.body.search;

    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`);
    res.render('./views/search', { articles: newsAPI.data} );
});


module.exports = router;