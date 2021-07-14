import "./Button.css";

const Button = ({ text, Width, Height, type, onClick }) => {
  return (
    <button
      className="buttonPage"
      type={type}
      style={{ width: Width, height: Height }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
