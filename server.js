const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');

const app = express();

app.options('*',cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const db = new Database('raceCarRental.db');

const multer = require('multer');
const upload = multer();

app.post('/drivers',upload.none(),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "INSERT INTO Drivers(FirstName,LastName,Email, Experience_Years,AdditionalTraining) VALUES (?,?,?,?,?)";
    const statement = db.prepare(sql);
    const result = statement.run([req.body.FirstName,req.body.LastName,req.body.Email,req.body.Experience_Years,req.body.AdditionalTraining]);
});

app.post('/cars',upload.none(),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "INSERT INTO Cars(Year,Make,Model,Type,Horse_Power,Top_Speed,Transmission,DriveTrain) VALUES (?,?,?,?,?,?,?,?)";
    const statement = db.prepare(sql);
    const result = statement.run([req.body.Year,req.body.Make,req.body.Model,req.body.Type,req.body.Horse_Power,req.body.Top_Speed,req.body.Transmission,req.body.DriveTrain]);
});

app.post('/tracks',upload.none(),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "INSERT INTO Tracks(Track_Name,Type,City,Country,Distance) VALUES (?,?,?,?,?)";
    const statement = db.prepare(sql);
    const result = statement.run([req.body.Track_Name,req.body.Type,req.body.City,req.body.Country,req.body.Distance]);
});

app.get('/drivers',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "SELECT * FROM Drivers ORDER BY Experience_Years DESC";
    const statement = db.prepare(sql);

    const arrOutput = [];
    for(const driver of statement.iterate())
    {
        console.log(driver);
        arrOutput.push(driver);
    }
    res.end(JSON.stringify(arrOutput));
});

app.get('/cars',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "SELECT * FROM Cars";
    const statement = db.prepare(sql);

    const arrOutput = [];
    for(const car of statement.iterate())
    {
        console.log(car);
        arrOutput.push(car);
    }
    res.end(JSON.stringify(arrOutput));
});

app.get('/tracks',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const sql = "SELECT * FROM Tracks";
    const statement = db.prepare(sql);

    const arrOutput = [];
    for(const track of statement.iterate())
    {
        console.log(track);
        arrOutput.push(track);
    }
    res.end(JSON.stringify(arrOutput));
});

app.delete('/drivers/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const sql = "DELETE FROM Drivers WHERE DriverId=?";
    const statement = db.prepare(sql);
    statement.run([req.params.id]);
    console.log('delete',req.params.id);
    res.end();
});

app.delete('/cars/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const sql = "DELETE FROM Cars WHERE ID=?";
    const statement = db.prepare(sql);
    statement.run([req.params.id]);
    console.log('delete',req.params.id);
    res.end();
});

app.delete('/tracks/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const sql = "DELETE FROM Tracks WHERE Track_ID=?";
    const statement = db.prepare(sql);
    statement.run([req.params.id]);
    console.log('delete',req.params.id);
    res.end();
});

app.put('/drivers/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const sql = "UPDATE Drivers SET FirstName ='?',LastName='?',Email='?',Experience_Years='?',AdditionalTraining='?' WHERE DriverId=?";
    const statement = db.prepare(sql);
    statement.run([req.params.id]);
    console.log('put',req.params.id);
    res.end();
});

app.put('/cars/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const sql = "UPDATE Cars SET Year='?',Make='?',Model='?',Type='?',Horse_Power='?',Top_Speed='?',Transmission='?',DriveTrain='?' WHERE ID=?";
    const statement = db.prepare(sql);
    statement.run([req.params.id]);
    console.log('put',req.params.id);
    res.end();
});

app.put('/tracks/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const sql = "UPDATE Tracks SET TrackName='?',Type='?',City='?',Country='?',Distance='?' WHERE Track_ID=?";
    const statement = db.prepare(sql);
    statement.run([req.params.id]);
    console.log('put',req.params.id);
    res.end();
});

app.listen(8888);