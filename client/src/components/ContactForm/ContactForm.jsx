import "./ContactForm.css"
import "./ContactFormResponsive.css"
import { Button } from "../../components"
import { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ objeto }) => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');

  const data = { option1, option2, option3, option4 }

  const sendEmail = async () => {
    try {
      await axios.post('https://ijuniorloop.herokuapp.com/sendmail', data)
      alert("Email enviado com sucesso");
    } catch (error) {
      alert("Houve um erro. Tente novamente.")
      console.log(error);
    }
  }

  return (
    <form onSubmit={sendEmail} >
      <input
        id="option-1"
        type="text"
        placeholder={objeto.option1}
        required
        onChange={(e) => setOption1([e.target.value, objeto.option1])}
      />

      <input
        id="option-2"
        type="text"
        placeholder={objeto.option2}
        required
        onChange={(e) => setOption2([e.target.value, objeto.option2])}
      />

      <input
        id="option-3"
        type="text"
        placeholder={objeto.option3}
        required
        onChange={(e) => setOption3([e.target.value, objeto.option3])}
      />

      <textarea
        id="option-4"
        placeholder={objeto.option4}
        required
        onChange={(e) => setOption4([e.target.value, objeto.option4])} />

      <Button type="submit" Width="108px" Height="42px" text="Enviar" />
    </form>
  )
};

export default ContactForm;