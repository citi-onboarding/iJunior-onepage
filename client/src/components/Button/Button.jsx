import './Button.css';

function Button({text, Width , Height}) {
  
  return (
      <button className="buttonPage" style={{width: Width, height: Height}}>{text}</button>
  );
}

export default Button;