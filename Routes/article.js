const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) =>{
    res.render('./views/article');
});

router.get('/:id',async(req, res) => {
    const articleID = req.params.id;

    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`);
    res.render('./views/article', { article: newsAPI.data} );
});


module.exports = router;