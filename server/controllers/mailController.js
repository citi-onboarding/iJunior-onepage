const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config()

const sendMail = async (req, res) => {
  try {
    const { option1, option2, option3, option4 } = req.body;
    console.log(option1[0])
    const body = `
    ${option1[1]}: ${option1[0]}
    ${option2[1]}: ${option2[0]}
    ${option3[1]}: ${option3[0]}
    ${option4[1]}: ${option4[0]}
    `;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      }
    });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: option4[0],
      text: body,
    });

    res.status(200).send('Everything is alright');
  } catch (error) {
    res.status(500).send('Ops, something is wrong');
    console.log(error);
  }
};

module.exports = sendMail;