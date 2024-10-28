const express = require('express')
const app = express();

const atsRoutes = require('./routes/ats');

// Use the API routes
app.use('/ats', atsRoutes);

app.listen(1235)

app.get('/',(req,res) =>{

    console.log('You made it!!') 

    res.write('Home Page starts here')
    res.end();
})

app.get('/favicon.ico',(req,res) =>{

    res.end();

})
