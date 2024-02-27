var express = require('express')

const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
app.use(cors())


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 600
  }));
const port = 3000
// const corsOptions ={
//     origin:'localhost:300', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
 


// const cors = require('cors')
// const nodemailer = require("nodemailer");
app.use(bodyParser.urlencoded({
    extended: true
  }));
// app.use(cors())
app.use(bodyParser.json());
// app.use(express.json())
// app.use(bodyParser.json());

// const bodyParser = require('body-parser');
// const path = require('path')
// "use strict";

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//    extended: false
// }));
// app.use(cors)

// app.use((request, response, next) => {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
//   });

// const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     host: "smtp.gmail.com",
//     // port: 465,
//     secure: true,
//     auth: {
//         user: "sallysegui10@gmail.com",
//         pass: "vead myct ugfj iitb",
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
//   });

// const mailOptions = {
//      from: 'sallysegui10@gmail.com',
//     to: 'sallysegui10@gmail.com',
//     subject: 'Test Email for AMX',
//     text: 'This is a test email sent from Nodemailer from Sally'
// };
// //http://localhost:5173/public/css/images/logoBrowsweOriginal.png
// //   let mailOptions= {
// //     from: 'sallysegui10@gmail.com',
// //     to: 'sallysegui10@gmail.com',
// //     subject: 'AMP4EMAIL message',
// //     text: 'For clients with plaintext support only',
// //     html: 
// //     // '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',
// //     // amp: 
// //     `<!DOCTYPE html>
// //     <html lang="en">
// //     <head>
// //         <meta charset="UTF-8">
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //         <title>AMX Support - Automatic Response</title>
// //         <style>
// //             body {
// //                 font-family: Arial, sans-serif;
// //                 background-color: #f4f4f4;
// //                 padding: 20px;
// //             }
// //             .container {
// //                 max-width: 600px;
// //                 margin: 0 auto;
// //                 background-color: #fff;
// //                 padding: 20px;
// //                 border-radius: 8px;
// //                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// //             }
// //             .logo {
// //                 text-align: center;
// //                 margin-bottom: 20px;
// //                 margin-top: 100px;
// //             }
// //             .logo img {
// //                 max-width: 50px;
// //                 height: auto;
// //             }
// //             h1 {
// //                 color: #333;
// //                 text-align: center;
// //             }
// //             p {
// //                 color: #666;
// //                 line-height: 1.6;
// //             }
// //         </style>
// //     </head>
// //     <body>
// //         <div class="container">
            
               
           
// //             <h1>Automatic Response from AMX Support</h1>
// //             <p>Dear Customer,</p>
// //             <p>Thank you for contacting AMX Support. This is an automatic response to let you know that we have received your inquiry and will get back to you as soon as possible.</p>
// //             <p>In the meantime, feel free to visit our website for more information about our products and services.</p>
// //             <p>Best regards,<br>AMX Support Team</p>
// //             <div class="logo">
// //                 <img src="cid:myImg" alt="AMX Support Logo">
// //             </div>
// //         </div>
// //     </body>
// //     </html>`,
// //     attachments: [{
// //         filename: 'logoBrowswe.png',
// //         path: 'images' + '/logoBrowswe.png',
// //         cid: 'myImg'
// //       }]
// // }



// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email: ", error);
//     } else {
//       console.log("Email sent: ", info.response);
//     }
// });



app.post('/api/sendemail', (req, res) => {
    const {email, name, text } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        email,
        name,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

const employees = [
    { firstName: 'Jane', lastName: 'Smith', age: 20 },
    //...
    { firstName: 'John', lastName: 'Smith', age: 30 },
    { firstName: 'Mary', lastName: 'Green', age: 50 },
  ]

app.post('/', (req, res) => {
    // console.log('he;;')
    res.json(req.body)
    // console.log(req.body)
    const { email } = req.body;
    console.log(email)
    // console.log( res.json(employees))

  });


  
app.post('/', (req, res) => {
    console.log('post/')
    // res.send('Hello World!')
    // const {email, name, text } = req.body;
    // console.log('hello')
    // const mailOptions = {
    //     from: 'your-email@gmail.com',
    //     email,
    //     name,
    //     text
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.log(error);
    //         res.status(500).send('Error sending email');
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //         res.send('Email sent successfully');
    //     }
});

















    







app.get('/', (req, res) => {

    console.log('get/')
    res.send('Hello World!')
})
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

