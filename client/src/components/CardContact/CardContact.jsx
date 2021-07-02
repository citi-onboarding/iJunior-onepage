import './CardContact.css';

const CardContact = ({ fontsize, content, title, align, margin }) => {
  return (
    <div className="main" style={{ fontSize: fontsize }}>
      <div className="card-contact">
        <div className="contact-circle">
          <div className="circle" style={{ backgroundColor: "#009DBC" }}></div>
          <div className="circle" style={{ backgroundColor: "#11C5D7" }}></div>
          <div className="circle" style={{ backgroundColor: "#6D6D6D" }}></div>
        </div>
        <div className="contact-info">
          <h1 style={{ textAlign: align, marginLeft: margin }}>{title}</h1>
          <div>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
