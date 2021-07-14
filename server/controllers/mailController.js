const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const sendMail = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const body = `
    Nome: ${name}
    Telefone: ${phone}
    Email: ${email}
    Mensagem: ${message}
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "Contato iJunior Loop",
      text: body,
    });

    res.status(200).send("Everything is alright");
  } catch (error) {
    res.status(500).send("Ops, something is wrong");
    console.log(error);
  }
};

module.exports = sendMail;
