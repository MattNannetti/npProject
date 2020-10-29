const express = require ('express');
const newsRouter = express.Router();
//const axios = require('axios');

newsRouter.get('', async(req, res) => {
    try{
        /*
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('index', { articles : newsAPI.data });
        */
       const NewsAPI = require('newsapi');
       const newsapi = new NewsAPI('eb0d15382b4c4162a52cd2d87a7fd12f');
       // To query /v2/top-headlines
       // All options passed to topHeadlines are optional, but you need to include at least one of them
       newsapi.v2.topHeadlines({
         sources: 'bbc-news,the-verge',
         q: 'bitcoin',
         category: 'business',
         language: 'en',
         country: 'us'
       }).then(response => {
         console.log(response);
         
       });
    } catch (err) {
        if (err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.requiest) {
            console.log(err.requiest);
        } else {
            console.error('Error', err.message);
        }
    }

})

module.exports = newsRouter;