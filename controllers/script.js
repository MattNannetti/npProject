const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('eb0d15382b4c4162a52cd2d87a7fd12f');


newsapi.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2020-10-20',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    console.log(response);
});