// https://community.render.com/t/how-to-deploy-frontend-and-backend-on-render/7449
//https://www.youtube.com/watch?v=N9hrClMJFqk


const express = require('express')
// const path = require('path');
const nodemailer = require('nodemailer');
const app = express()
const cors = require('cors')

app.use(cors())
// app.use(express.static('dist'));
// app.use(express.static(path.join('server', 'dist')));

const port = 3008;

// // Nodemailer setup
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


app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });

  var message  = {
        from: 'sallysegui10@gmail.com',
        to: 'sallysegui10@gmail.com',
        subject: 'Test Email for AMX',
        text: 'This is a test email sent from Nodemailer from Sally',
        html: "<p>HTML version of the message</p>",
  };

//   let message = {
//     from: 'sallysegui10@gmail.com',
//     to: 'sallysegui10@gmail.com',
//     subject: 'AMP4EMAIL message',
//     text: 'For clients with plaintext support only',
//     html: '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',
//     amp: `<!doctype html>
//     <html ⚡4email>
//       <head>
//         <meta charset="utf-8">
//         <style amp4email-boilerplate>body{visibility:hidden}</style>
//         <script async src="https://cdn.ampproject.org/v0.js"></script>
//         <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
//       </head>
//       <body>
//         <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
//         <p>GIF (requires "amp-anim" script in header):<br/>
//           <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
//       </body>
//     </html>`
// }

///Endpoint to send email
// app.get('/sendemail', (req, res) => {
//    const mailOptions = {
//         from: 'sallysegui10@gmail.com',
//         to: 'sallysegui10@gmail.com',
//         subject: 'Test Email for AMX',
//         text: 'This is a test email sent from Nodemailer from Sally'
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.send('Email sent successfully');
//         }
//     });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});