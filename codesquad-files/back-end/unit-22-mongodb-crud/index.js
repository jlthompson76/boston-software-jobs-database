const express = require('express');
const body_parser = require('body-parser');

const PORT = 3000;
const app = express();
// Set the View Engine
app.set('view engine', 'ejs');

// Use body Parser in middle-ware
app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: true} ));


// Declare any constants or variables here for Database

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);

    // Step 4.
    // Here you should create a connection with your database
    // Upon success, print a message saying "Database Connected"
    // Upon success, you should also connect to the 'bsj' database.
    
});

// From here on, we can start writing our routes

app.get('/', (req, res) => {
    res.render("index");
});


app.get('/jobs', (req, res) => {
    // In Step 7, we will fetch data from Database here and send to jobs.ejs page using an array called all_compaies
    res.render('jobs', {});
});

app.post('/add', (req, res) => {
    // This is where you will get a POST request on the '/add' route. 
    // Step 5. Add your logic here to add a new company to the database.
});
