import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_LINK } from "../../apis";
import Button from "../customTags/Button";
import Input from "../customTags/Input";
import ErrorMsg from "../errorMsg/ErrorMsg";

const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_LINK}/auth/signin`, {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          setErrorMsg([{ message: res.message }]);
        } else {
          navigate("/welcome");
          console.log("Signin Successfull");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(document.cookie);

  return (
    <div
      style={{
        width: "35%",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Signup</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 20,
        }}
        onSubmit={handleSubmit}
        onChange={handleOnChange}
      >
        <Input type="text" name="email" />
        <Input type="password" name="password" />
        <Button type="submit">Signin</Button>
      </form>
      <ErrorMsg errorMsg={errorMsg} />
    </div>
  );
};

export default Signin;
