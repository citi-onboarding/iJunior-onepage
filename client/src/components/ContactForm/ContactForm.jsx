import "./ContactForm.css"
import "./ContactFormResponsive.css"
import {Button} from "../../components"

function ContactForm({objeto}) {
    return(
        <form>
            <input id="option-1" type="text" placeholder={objeto.option1}></input>
            <input id="option-2" type="text" placeholder={objeto.option2}></input>
            <input id="option-3" type="text" placeholder={objeto.option3}></input>
            <textarea id="option-4" placeholder={objeto.option4}></textarea>
            <Button type="submit" Width="108px" Height="42px" text="Enviar"/>
        </form>
    )
}

export default ContactForm;