// Import required modules
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(cors());

//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());

// Nodemailer setup
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: "sallysegui10@gmail.com",
//         pass: "vead myct ugfj iitb",
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
// });

const transporter = nodemailer.createTransport({
  //   service: "Gmail",
  //   auth: {
  //     user: "sallysegui10@gmail.com",
  //     pass: "vead myct ugfj iitb",
  //   },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },

  // it works
  host: "smtp-mail.outlook.com", // hostname
  auth: {
    user: "noreply@amxsupport.com",
    pass: "kQg-|u0cgoAsE%@Hk_t1",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/api/test", (req, res) => {
  // Retrieve data from the request body
  const { name, email, message, phoneNumber } = req.body;

  console.log(name);
  console.log(email);

  const mailOptions = {
    from: "noreply@amxsupport.com",
    to: email,
    subject: "Your AMX Support inquiry has been received",
    text: "AMX Support",
    html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AMX Support - Automatic Response</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    padding: 20px;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .logo {
                    text-align: center;
                    margin-bottom: 20px;
                    margin-top: 40px;
                }
                .logo img {
                    max-width: 10rem;
                    height: auto;
                }
                h1 {
                    color: #333;
                    text-align: center;
                }
                p {
                    color: #666;
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>This is an automatic response from AMX Support</h1>
                <p>Dear ${name},</p>
                <p>Thank you for contacting AMX Support. We have received your inquiry and will get back to you as soon as possible.</p>
                <p>In the meantime, feel free to visit our website for more information about our products and services.</p>
                <p>Best regards,<br>AMX Support Team</p>
                <div class="logo">
                    <img src="cid:myImg" alt="AMX Support Logo">
                </div>
            </div>
        </body>
        </html>`,
    attachments: [
      {
        filename: "logoBrowswe.png",
        path: "images" + "/logo.png",
        cid: "myImg",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });

  const mailOptions2 = {
    from: "noreply@amxsupport.com",
    to: "sallysegui10@gmail.com",
    subject: "An inquiry has been submitted through the website contact form",
    text: "AMX Support",
    html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AMX Support - Automatic Response</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    padding: 20px;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .logo {
                    text-align: center;
                    margin-bottom: 20px;
                    margin-top: 40px;
                }
                .logo img {
                    max-width: 10rem;
                    height: auto;
                }
                h1 {
                    color: #333;
                    text-align: center;
                }
                p {
                    color: #666;
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            <div class="container">
                
                   
               
                <h1>AMX Support has a new message!</h1>
                <p>An inquiry has been submitted through the website contact form with the following message:</p>
                <p>${message}</p>
                <p> From: ${name}</p>
                <p> Email: ${email}</p>
                <p> Phone Number: ${phoneNumber}</p>
                <p><br>AMX Support Website autoresponse</p>
                <div class="logo">
                    <img src="cid:myImg" alt="AMX Support Logo">
                </div>
            </div>
        </body>
        </html>`,
    attachments: [
      {
        filename: "logoBrowswe.png",
        path: "images" + "/logo.png",
        cid: "myImg",
      },
    ],
  };

  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
  console.log("welcome");
});
// Define the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
