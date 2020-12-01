const path = require('path');
const {mongoConnect} = require('./util/database')

const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');//gestion variable d'env
dotenv.config({path:'./config.env'})
const errorController = require('./controllers/error');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
    //     // User.findByPk(1)
    //     //     .then(user => {
        //     //         req.user = user;
        //     //         next();
        //     //     })
        //     //     .catch(err => console.log(err));
        // });



//ROUTE
app.use('/admin', require('./routes/admin'));
app.use(require('./routes/shop'));

app.use(errorController.get404);

mongoConnect(()=>{
    app.listen(3000)
})