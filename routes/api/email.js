const nodemailer = require('nodemailer');
const keys = require('../../config/keys');
const sgMail = require('@sendgrid/mail');

module.exports = app => {
  app.post('/api/email', (req, res) => {
    sgMail.setApiKey(keys.sendGridKey);
    const msg = {
      to: req.body.email,
      from: 'do-not-reply@washdrop.com',
      subject: `Confirmation of Order: From WashRoyal Order#: ${
        req.body.orderId
      }`,
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h1>Confirmation of Laundry Order</h1>
      <p>Hello ${req.body.clientName}!</p>
      <p>Your order#: ${req.body.orderId} on ${req.body.collectionDate} @ ${
        req.body.collectionTime
      } has been confirmed.</p>
    `
    };
    sgMail.send(msg);
  });
};
