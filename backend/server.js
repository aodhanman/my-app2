// server.js mostly taken from MERN application

const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://user:<user2>@cluster0-cbiqc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDB,  {useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:String,
    year:String,
    rating: String,
    poster:String
})

const BookModel = mongoose.model('book', bookSchema);


app.get('/', (req, res) => res.send('Testing...'))

app.get('/api/books', (req, res) => {
    res.send('/api/books')
})


app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/books', (req, res) => {

    BookModel.find((error, data) =>{
        res.json({books:data});
    })
    
})

app.get('/api/books/:name', (req, res)=>{
    console.log(req.params.name);

    BookModel.findById(req.params.name, (error,data)=>{
        res.json(data);
    })
})

app.delete('/api/books/:name', (req, res)=>{
    console.log(req.params.name);

    BookModel.deleteOne({_name: req.params.name},
        (error, data) =>{
            res.json(data);
        })
})

app.put('/api/books/:name',(req,res)=>{
    console.log("Edit: "+req.params.name);
    console.log(req.body);
    
    BookModel.findByIdAndUpdate(req.params.name,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

app.get('/api/books/:name', (req,res)=>{
    console.log("GET: "+req.params.name);

    BookModel.findById(req.params.name,(error, data)=>{
        res.json(data);
    })
})

app.post('/api/books', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.rating);

    console.log(req.body.poster);

    BookModel.create({
        title:req.body.title, 
        year:req.body.year, 
        year:req.body.rating, 

        poster:req.body.poster
    });

    res.json('post recieved!');
})
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))