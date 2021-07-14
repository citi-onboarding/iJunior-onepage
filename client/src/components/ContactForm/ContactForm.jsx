import "./ContactForm.css";
import "./ContactFormResponsive.css";
import { Button } from "../../components";
import { useState } from "react";
import axios from "axios";

const ContactForm = ({ objeto }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = { name, phone, email, message };

  const sendEmail = async () => {
    try {
      await axios.post("http://localhost:3001/sendmail", data);
      alert("Email enviado com sucesso");
    } catch (error) {
      alert("Houve um erro. Tente novamente.");
      console.log(error);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        id="option-1"
        type="text"
        placeholder={"Nome"}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <input
        id="option-2"
        type="tel"
        placeholder={"Telefone"}
        required
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        id="option-3"
        type="email"
        placeholder={"Email"}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        id="option-4"
        placeholder={"Mensagem"}
        required
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button type="submit" Width="108px" Height="42px" text="Enviar" />
    </form>
  );
};

export default ContactForm;
