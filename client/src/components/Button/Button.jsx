import './Button.css';

function Button({text, Width , Height}) {
  
  return (
      <button style={{width: Width, height: Height}}>{text}</button>
  );
}

export default Button;