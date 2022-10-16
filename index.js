const express = require ('express');
const app = express();
const cors = require('cors');

const phones = require('./Phone.json')
const port = 5000;

app.use(cors())
app.get('/',(req,res)=>{
    res.send('this is a i phone server running')
})
app.get('/phones',(req,res)=>{
    res.send(phones)
})
app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const phone = phones.find(ph => ph.id === id || {});
    res.send(phone);
 
})
app.listen(port, ()=>{
    console.log(`iphon server is running on port ${port}`)
})