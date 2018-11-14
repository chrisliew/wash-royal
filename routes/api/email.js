const nodemailer = require('nodemailer');
const keys = require('../../config/keys');

module.exports = (app) => {
  app.post('/api/email', (req, res) => {
    console.log("REQBODY", req.body);

    const confirmationEmail = `
      <h1>Confirmation of Laundry Order</h1>
      <p>Hello ${req.body.clientName}!</p>
      <p>Your order#: ${req.body.orderId} on ${req.body.collectionDate} @ ${req.body.collectionTime} has been confirmed.</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'chriswvliew@gmail.com',
        pass: keys.email
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    let mailOptions = {
      from: '"Wash Royal" <chriswvliew@gmail.com>',
      to: req.body.email,
      subject: `Confirmation of Order: From WashRoyal Order#: ${req.body.orderId}`,
      // text: "Confirmation of wash completed",
      html: confirmationEmail
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    })
  })
}