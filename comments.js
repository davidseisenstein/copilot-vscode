// Create Web Server 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Read comments.json file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

// Write comments.json file
app.post('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
            res.send('Comment added');
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});