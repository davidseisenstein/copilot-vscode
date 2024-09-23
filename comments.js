// Create Web Server
// 1. Import Express
const express = require('express');
// 2. Create an Express Application
const app = express();
// 3. Set the Port
const port = 3000;
// 4. Create the Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Start the Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 6. Export the Application
module.exports = app;