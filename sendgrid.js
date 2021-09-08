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
    <h1>Kundenanfrage ${process.env.PAYLOAD.subject}</h1> 
    <p><b>Projekt:</b> ${process.env.PAYLOAD.from_project_link}</p>
    <p><b>Kunde:</b> ${process.env.PAYLOAD.form_first_name} ${process.env.PAYLOAD.form_last_name}</p> 
    <p><b>Kontakt E-Mail:</b> ${process.env.PAYLOAD.from_email}</p> 
    <p><b>Kontakt Telefon-Nr.:</b> ${process.env.PAYLOAD.form_telephone}</p> 
    <p><b>Nachricht:</b></p>
    <p>${process.env.PAYLOAD.html_message}</p>`
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
