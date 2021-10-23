import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(bodyParser.json())
app.use(cors());

import newsletter from './routes/api/newsletter.js'
// import contact from './routes/api/contact.js'

app.use('/api/newsletter', newsletter)
// app.use('/api/contact', contact)

// Handle production 
if(process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + 'public/'));

    //Handle SPA 
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Hi, I'm runnig! port: ${port}`));