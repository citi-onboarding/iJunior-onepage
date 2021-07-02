import React, { useState, useEffect } from "react";
import axios from "axios";
import './Contact.css';
import './ContactResponsive.css';
import { CardContact } from '../../components';
import { ContactForm } from '../../components';
import { ContactLinks } from '../../components';

const Contact = () => {
  const [contacts, setcontacts] = useState([])
  const laodContact = async () => {
    const res = await axios.get('https://ijuniorloop.herokuapp.com/api/contact');
    const Options = res.data[0].secondCard.options
    const first = res.data[0].firstCard
    const Objeto = {
      topicOne: { title: first.topicOne.title, link: first.topicOne.links, url: first.topicOne.logos[0].url },
      topicTwo: { title: res.data[0].firstCard.topicTwo.title, link: first.topicTwo.links, url: first.topicTwo.logos[0].url },
      topicThree: { title: first.topicThree.title, link: first.topicThree.links, url: first.topicThree.logos[0].url },
      topicFour: { title: first.topicFour.title, link: first.topicFour.links, url: first.topicFour.logos[0].url },
      options: { option1: Options.topicOne, option2: Options.topicTwo, option3: Options.topicThree, option4: Options.topicFour }
    }
    setcontacts(Objeto)
  };

  useEffect(() => {
    laodContact();
  }, []);

  return (
    <div id="contato">
      {contacts.options && (
        <>
          <div className="contact-link">
            <CardContact title="Fale Conosco" align="left" margin="3.84em" fontsize="40.74%" content={<ContactLinks object={{ topicOne: contacts.topicOne, topicTwo: contacts.topicTwo, topicThree: contacts.topicThree, topicFour: contacts.topicFour }} />} />
          </div>
          <div className="contact-form" >
            <CardContact title="Entre em Contato" fontsize="62.5%" content={<ContactForm objeto={contacts.options} />} />
          </div>
        </>
      )
      }
    </div>
  )
};

export default Contact;