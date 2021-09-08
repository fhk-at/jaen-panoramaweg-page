#! /usr/bin/env node

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const fs = require('fs'),
//   filename = 'hello-world.pdf',
//   fileType = 'application/pdf',
//   data = fs.readFileSync('attachments/' + filename)

const msg = {
  to: 'kleberbaum@erebos.xyz',
  from: 'inspiremedia-fwd@outlook.com',
  subject: 'Hello world',
  text: 'Hello plain world!',
  html: `<p><img src='https://topimmo.aichner.cloud/media/images/logo_topimmo.original.jpg' alt='Logo'></p> 
    <h1>Kundenanfrage ${process.env.SUBJECT}</h1> 
    <p><b>Projekt:</b> ${process.env.PROJECT_LINK}</p>
    <p><b>Kunde:</b> ${process.env.FIRST_NAME} ${process.env.LAST_NAME}</p> 
    <p><b>Kontakt E-Mail:</b> ${process.env.EMAIL}</p> 
    <p><b>Kontakt Telefon-Nr.:</b> ${process.env.TELEPHONE}</p> 
    <p><b>Nachricht:</b></p>
    <p>${process.env.MESSAGE}</p>`
  // attachments: [
  //   {
  //     content: data.toString('base64'),
  //     filename: filename,
  //     type: fileType,
  //     disposition: 'attachment'
  //   }
  // ]
}

sgMail
  .send(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()))
