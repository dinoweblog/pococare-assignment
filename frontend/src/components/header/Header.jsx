import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        padding: 10,
        paddingTop: 40,
        display: "flex",
        gap: 20,
        justifyContent: "center",
        fontSize: 22,
        width: "60%",
        margin: "auto",
        borderBottom: "1px solid #D8D9CF",
      }}
    >
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
    </div>
  );
};

export default Header;
