import './CardDevelopment.css';
function CardDevelopment({text,title,img}) {
  return (
    <div className="card-development">
      <img src={img}></img>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
export default CardDevelopment;