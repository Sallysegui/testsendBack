// Import required modules
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(cors())



//var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// Create an instance of Express
//app.use(express.json());
// Middleware to parse JSON request body
app.use(bodyParser.json());


// app.use(cors({
//     origin: 'http://127.0.0.1:3000',
// }))
// POST request handler
app.post('/api/test', (req, res) => {
    // Retrieve data from the request body
    console.log(req.body)
    // const {email} = req.body;
    

    // Do something with the data (for demonstration, just logging)
    // console.log(`Received a message from ${email}`);

    // Send a response
    res.status(200).json({ success: true, message: 'Message received successfully' });
});

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });
// Define the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});