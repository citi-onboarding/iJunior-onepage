import "./ContactLinks.css"

const ContactLinks = ({ object }) => {
  return (
    <div className="links">
      <div className="Links-option one">
        <a href={object.topicOne.link} target="_blank" rel="noopener noreferrer">
          <img src={object.topicOne.url} alt={object.topicOne.title} />
          <p>{object.topicOne.title}</p>
        </a>
      </div>

      <div className="Links-option two">
        <a href={object.topicTwo.link} target="_blank" rel="noopener noreferrer">
          <img src={object.topicTwo.url} alt={object.topicTwo.title} />
          <p>{object.topicTwo.title}</p>
        </a>
      </div>

      <div className="Links-option three">
        <a href={object.topicThree.link} target="_blank" rel="noopener noreferrer">
          <img src={object.topicThree.url} alt={object.topicThree.title} />
          <p>{object.topicThree.title}</p>
        </a>
      </div>

      <div className="Links-option four">
        <a href={object.topicFour.link} target="_blank" rel="noopener noreferrer">
          <img src={object.topicFour.url} alt={object.topicFour.title} />
          <p>{object.topicFour.title}</p>
        </a>
      </div>
    </div>
  )
};

export default ContactLinks;