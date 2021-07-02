import './Button.css';

const Button = ({ text, Width, Height, type }) => {
  return (
    <button className="buttonPage" type={type} style={{ width: Width, height: Height }}>
      {text}
    </button>
  );
};

export default Button;