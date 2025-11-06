import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'patchavijayasri12@gmail.com',    // Your email address
      pass: 'gzyb vdgi dbhd gedg',            // Your Gmail "App Password", NOT your Gmail login password
    }
  });

  try {
    let info = await transporter.sendMail({
      from: '"My Flutter App" <patchavijayasri12@gmail.com>', // sender address
      to,                    // list of recipients, comma-separated
      subject,               // Subject line
      text                   // Email body text
    });
    res.json({ message: 'Email sent', info });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// For Railway and most cloud hosts, always listen on the port provided in env variables:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));

