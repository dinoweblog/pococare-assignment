const Button = ({ children, style, onClick, type }) => {
  return (
    <button
      style={{
        height: "45px",
        maxWidth: 150,
        border: "1px solid #B2B2B2",
        borderRadius: "4px",
        fontSize: 18,
        ...style,
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
