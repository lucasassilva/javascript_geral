require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const routes = require('./routes');
const csrf = require('csurf');
const helmet = require("helmet");
const cookieParser = require('cookie-parser');
const { checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// body parser
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// public
app.use(express.static(path.join(__dirname, "public")));

// ejs
app.set('view engine', 'ejs');
app.set('views','src/views');

// csrf
app.use(cookieParser());
app.use(csrf({ cookie: true }));

// helmet
app.use(helmet());

// middlewares
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes); 

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});



