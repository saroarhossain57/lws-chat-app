const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('node:path');
const cookieParser = require('cookie-parser');

const { errorHandler, notFoundHandler } = require('./middlewares/common/errorHandler');

// Routes
const loginRoutes = require('./routes/loginRoutes');
const usersRoutes = require('./routes/usersRoutes');
const inboxRoutes = require('./routes/inboxRoutes');

// Intialize application
const app = express();


// Connect Database
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_CONNECTION).
then(() => {
    console.log('Database connected');
}).catch(err => {
    console.log("Database connection failed: ", err);
});

// Parse request body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');

// set static folder for frontend
app.use(express.static(path.join(__dirname, 'public')));

// Cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));


// App Routing
app.use('/', loginRoutes);
app.use('/users', usersRoutes);
app.use('/inbox', inboxRoutes);

// Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

// Start the server
app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on post ${process.env.APP_PORT}`);
});