// mongoDB pw = 8hIU7VUaCpDhcclV
// mongoDB user = mattn
// mongodb+srv://mongodb+srv://mattn:<password>@cluster0.gcg2o.mongodb.net/<dbname>?retryWrites=true&w=majority

/*
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
*/

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const categoriesRouter = require('./routes/categories');
const articleRouter = require('./routes/article');
const elementsRouter = require('./routes/elements');
const registerRouter = require('./routes/register');
const signinRouter = require('./routes/signin');



app.set('view engine', 'ejs');
app.set('views', __dirname, ' /views');
app.set('layout', './views/layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}));
app.use(express.urlencoded({ extended: false }));


/*
app.use((req, res, next => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Contorl-Allow-Headers', 'Origin, X-Requested-Width, Accept, Content-Type, Authorization');
  res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}));
*/


// connecting to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mattn:8hIU7VUaCpDhcclV@cluster0.gcg2o.mongodb.net/IT-Watch?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB');
    console.error(error);
  });


//link to our first route (or controller)
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/article', articleRouter);
app.use('/elements', elementsRouter);
app.use('/register', registerRouter);
app.use('/signin', signinRouter);




//Listenning to defined PORT
app.listen(process.env.PORT ||2500, () => {
    console.log('The application is running on localhost:2500');
});



