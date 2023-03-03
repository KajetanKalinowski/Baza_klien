const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baza_klient"
})
con.connect(function(err) {
    if (err) {console.log(err)}
    console.log("Połączono!")
})
app.get("/select", function(req,res){
    const sql = "SELECT * FROM todolist"
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        res.send(result)
    })
})
app.get("/add/:Nazwa/:czy_wykonane/:Termin",function(req,res){
    const Nazwa = req.params.Nazwa
    const Termin = req.params.Termin
    const sql = `INSERT INTO todolist (Nazwa,czy_wykonane,Termin) VALUES ('${Nazwa}','0','${Termin}')`
    con.query(sql, function(err,result,fields){
        if(err) {
            console.log(err)
            res.send("Nie dodano")
        }else res.send("dodano")
    })
})

app.listen(3000)    