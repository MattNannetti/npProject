const express = require('express');
const router = express.Router();
const axios = require('axios');
//const NewsAPI = require('newsapi');
//const newsapi = new NewsAPI('eb0d15382b4c4162a52cd2d87a7fd12f');
/*
router.get('/', (req, res) =>{
    res.render('./views/index');
    console.log('hi');
});
*/

router.get('/',async(req, res) => {
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/4151`);
    const newsAPI2 = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/5214`);
    const newsAPI3 = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/5228`);
    const articleOfTheDay = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/5228`);



    res.render('./views/index', { article1: newsAPI.data, article2: newsAPI2.data, article3: newsAPI3.data, artOfTheDay: articleOfTheDay.data} );
});

/*
router.get('/',async(req, res) => {
    const newsAPI2 = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/5214`);
    res.render('./views/index', { article2: newsAPI2.data} );
});


router.get('/',async(req, res) => {
    const newsAPI3 = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/5228`);
    res.render('./views/index', { article3: newsAPI3.data} );
});
*/



module.exports = router;