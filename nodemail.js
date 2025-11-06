import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail', // Choose your email service (Gmail, Outlook etc.)
    auth: {
      user: 'patchavijayasri12@gmail.com',       // Your email address
      pass: 'gzyb vdgi dbhd gedg',             // Your email app password (See below!)
    }
  });

  try {
    let info = await transporter.sendMail({
      from: '"My Flutter App" <youraccount@gmail.com>', // sender address
      to,                   // list of receivers, comma-separated
      subject,              // Subject line
      text                  // plain text body
    });
    res.json({ message: 'Email sent', info });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
