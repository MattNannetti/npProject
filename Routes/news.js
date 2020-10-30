const express = require ('express');
const newsRouter = express.Router();
const axios = require('axios');

newsRouter.get('/index',async(req, res) => {
        
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
        console.log('oh');
        


})

module.exports = newsRouter;