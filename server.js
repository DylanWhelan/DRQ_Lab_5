const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

// This is the page a user will access upon initially going to local host
app.get('/', (req, res) => {
    // The string is passed to the user here
    res.send('Welcome to Data Representation & Querying!')
})

// This shall pass a string to the user containing hello, and whatever they have put after the hello/
app.get('/hello/:name', (req, res)=>{
    // The concatenated string is passed to the user here.
    res.send('Hello ' + req.params.name + " !");
})

// This is where the page that displays stored json info the user outputs the information
app.get('/api/movies', (req, res)=>{
    // The json object array is declared as a constant array here
    const mymovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    // The json object array is passed to the user here, with mymovies[] being passed to movies[]
    res.json({movies:mymovies});
})

// This is the page that displays the html index
app.get('/test', (req, res)=>{
    // The html index in the form of the html file is passed to the user here, to utilise the _dirname here, a constant path must be declared at the top
    res.sendFile(__dirname + "/index.html");
})

// This is passing the users first name and last name as entered in the index to them using the get method
app.get('/name', (req, res)=>{
    // The concatenated string is passed to the user
    res.send("Hello " + req.query.fname + " " + req.query.lname);
})

// This is passing the users first name and last name as entered in the index to them using the post method
app.post('/name', (req, res)=>{
    // This requires the use of the body-parser as declared in the top of the server
    res.send("Hello " + req.body.fname + " " + req.body.lname);
})

// This will output to to console the url needed to access the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})