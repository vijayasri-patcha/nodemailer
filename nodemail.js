import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }
  const { to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'patchavijayasri12@gmail.com', // your Gmail
      pass: 'gzyb vdgi dbhd gedg'           // your Gmail app password
    }
  });

  try {
    let info = await transporter.sendMail({
      from: '"My Flutter App" <patchavijayasri12@gmail.com>',
      to,
      subject,
      text
    });
    res.json({ message: 'Email sent', info });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}

